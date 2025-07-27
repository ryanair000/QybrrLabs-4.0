import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/hooks/useAuth';

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: '',
    excerpt: '',
    content: '',
    cover_image: '',
    categories: '',
    tags: '',
    published: false,
  });

  const save = async () => {
    setLoading(true);
    const payload: any = {
      ...data,
      categories: data.categories.split(',').map((s) => s.trim()),
      tags: data.tags.split(',').map((s) => s.trim()),
      author_name: user?.user_metadata?.full_name ?? 'Admin',
      author_avatar: user?.user_metadata?.avatar_url ?? null,
    };
    let res;
    if (isNew) {
      res = await supabase.from('posts').insert(payload).select('id').single();
    } else {
      res = await supabase.from('posts').update(payload).eq('id', id);
    }
    setLoading(false);
    if (res.error) return toast.error(res.error.message);
    toast.success('Saved');
    navigate('/admin/posts');
  };

  return (
    <Layout>
      <section className="py-10 max-w-3xl mx-auto space-y-6 px-4">
        <h1 className="text-3xl font-bold">{isNew ? 'New Post' : 'Edit Post'}</h1>
        <Input placeholder="Title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        <Textarea placeholder="Excerpt" rows={3} value={data.excerpt} onChange={(e) => setData({ ...data, excerpt: e.target.value })} />
        <Textarea placeholder="Content (HTML or Markdown)" rows={10} value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })} />
        <Input placeholder="Cover image URL" value={data.cover_image} onChange={(e) => setData({ ...data, cover_image: e.target.value })} />
        <Input placeholder="Categories (comma separated)" value={data.categories} onChange={(e) => setData({ ...data, categories: e.target.value })} />
        <Input placeholder="Tags (comma separated)" value={data.tags} onChange={(e) => setData({ ...data, tags: e.target.value })} />
        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={data.published} onChange={(e) => setData({ ...data, published: e.target.checked })} />
            <span>Published</span>
          </label>
        </div>
        <Button onClick={save} disabled={loading}>{loading ? 'Saving...' : 'Save'}</Button>
      </section>
    </Layout>
  );
};

export default PostEditor;
