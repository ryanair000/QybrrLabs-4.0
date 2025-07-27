import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Spinner from '@/components/ui/spinner';

interface PostRow {
  id: number;
  title: string;
  published: boolean;
  published_at: string | null;
}

const fetchRows = async (): Promise<PostRow[]> => {
  const { data, error } = await supabase.from('posts').select('id,title,published,published_at').order('created_at',{ascending:false});
  if (error) throw error;
  return data as any;
};

const PostsList = () => {
  const { data: rows = [], isLoading, error } = useQuery({ queryKey:['admin-posts'], queryFn: fetchRows });

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <Link to="/admin/posts/new">
            <Button>Create New</Button>
          </Link>
        </div>
        {isLoading && <div className="py-16 flex justify-center"><Spinner size={24} /></div>}
        {error && <p className="text-red-600">{(error as Error).message}</p>}
        {!isLoading && (
          <div className="border rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Title</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Published</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-3 whitespace-nowrap">{row.title}</td>
                    <td className="px-4 py-3">
                      {row.published ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Published</Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Draft</Badge>
                      )}
                    </td>
                    <td className="px-4 py-3">{row.published_at ? new Date(row.published_at).toLocaleDateString() : '-'}</td>
                    <td className="px-4 py-3 text-right">
                      <Link to={`/admin/posts/${row.id}`} className="text-purple-600 hover:underline">Edit</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default PostsList;
