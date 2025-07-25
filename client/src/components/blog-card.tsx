import { type BlogPost } from "@shared/schema";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'architecture':
        return 'bg-electric-blue/20 text-electric-blue';
      case 'django':
        return 'bg-neon-purple/20 text-neon-purple';
      case 'project management':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="neumorphism p-6 rounded-xl group hover:bg-gray-800/50 transition-all duration-300" data-testid={`blog-${post.slug}`}>
      {post.imageUrl && (
        <img 
          src={`${post.imageUrl}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250`}
          alt={post.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-3 py-1 text-xs rounded-full ${getCategoryColor(post.category)}`}>
          {post.category}
        </span>
        <span className="text-xs text-gray-400 flex items-center">
          <Clock className="w-3 h-3 mr-1" />{post.readTime}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors">{post.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
      <div className="flex items-center text-xs text-gray-500">
        <Calendar className="w-3 h-3 mr-1" />
        {formatDate(post.createdAt)}
      </div>
    </div>
  );
}
