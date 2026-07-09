import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { BiRightArrowAlt, BiLinkExternal, BiArrowBack } from "react-icons/bi";
import Button from "./ui/Button";
import { marked } from "marked";

const DEVTO_USERNAME = "tanas2k4";

// Dùng proxy khi local (tránh CORS), dùng trực tiếp khi production
const DEVTO_BASE =
  import.meta.env.DEV ? "/devto-api" : "https://dev.to/api";

const mockBlogs = [];

const Blog = () => {
  const { language, t } = useApp();
  const [blogsList, setBlogsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Detail view states
  const [activePostId, setActivePostId] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // Fetch list of blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${DEVTO_BASE}/articles?username=${DEVTO_USERNAME}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const formatted = data.map((post) => ({
              id: post.id,
              title: post.title,
              tag: post.tag_list && post.tag_list[0] ? post.tag_list[0].toUpperCase() : "BLOG",
              tags: post.tag_list || [],
              date: new Date(post.published_at).getFullYear().toString(),
              link: post.url,
              excerpt: post.description,
            }));
            setBlogsList(formatted);
          } else {
            setBlogsList(mockBlogs);
          }
        } else {
          setBlogsList(mockBlogs);
        }
      } catch {
        setBlogsList(mockBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Fetch single blog detail
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!activePostId) {
      setActivePost(null);
      return;
    }

    const fetchDetail = async () => {
      setLoadingDetail(true);
      try {
        const res = await fetch(`${DEVTO_BASE}/articles/${activePostId}`);
        if (res.ok) {
          const data = await res.json();
          setActivePost(data);
        }
      } catch (err) {
        console.error("Error fetching article details:", err);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchDetail();
  }, [activePostId]);

  // Lọc bài viết dựa theo tag và ngôn ngữ chọn
  const filteredBlogs = blogsList.filter((blog) => {
    const hasViTag = blog.tags?.some(t => t.toLowerCase() === "vi" || t.toLowerCase() === "vietnamese");
    if (language === "vi") {
      return hasViTag;
    } else {
      return !hasViTag;
    }
  });

  // Nếu đang ở tiếng Việt nhưng chưa có bài viết tiếng Việt nào, hiển thị danh sách bài viết tiếng Anh để tránh trống trang
  const finalBlogsList = (language === "vi" && filteredBlogs.length === 0)
    ? blogsList.filter(blog => !blog.tags?.some(t => t.toLowerCase() === "vi" || t.toLowerCase() === "vietnamese"))
    : filteredBlogs;

  const displayedBlogs = isExpanded ? finalBlogsList : finalBlogsList.slice(0, 3);

  // Render Detailed Blog View
  if (activePostId) {
    return (
      <section
        id="blog-detail"
        className="w-full py-4 bg-white"
        style={{
          fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
        }}
      >
        <div className="w-full  mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="mb-4">
            <button
              onClick={() => setActivePostId(null)}
              className="text-2xl text-neutral-900 tracking-wide leading-none hover:opacity-75 transition-opacity cursor-pointer bg-transparent border-none p-0 flex items-center gap-2"
            >
              <span>{language === "en" ? "My Blogs" : "Blog của tôi"}</span>
              <span className="text-neutral-300 font-light font-sans">/</span>
            </button>
          </div>

          {loadingDetail || !activePost ? (
            <div className="py-20 text-center font-mono text-xs text-neutral-500">
              {language === "en" ? "Loading article content..." : "Đang tải nội dung bài viết..."}
            </div>
          ) : (
            <article className="animate-fade-in">
              {/* Cover image if available */}
              {activePost.cover_image && (
                <div className="w-full aspect-[21/9] overflow-hidden border border-neutral-200 mb-8 bg-neutral-50">
                  <img
                    src={activePost.cover_image}
                    alt={activePost.title}
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              )}

              {/* Title & Metadata */}
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-4 leading-tight">
                {activePost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mb-8 pb-4 border-b border-neutral-100">
                <span>
                  {new Date(activePost.published_at).toLocaleDateString(
                    language === "en" ? "en-US" : "vi-VN",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </span>
                <span>•</span>
                <span className="text-emerald-600 font-semibold uppercase">
                  {Array.isArray(activePost.tags)
                    ? activePost.tags.join(", ")
                    : typeof activePost.tag_list === "string"
                      ? activePost.tag_list
                      : ""}
                </span>
              </div>

              {/* Main HTML Body rendered from Markdown */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(activePost.body_markdown || "", { breaks: true, gfm: true }),
                }}
              />

              {/* Footer dev.to attribution */}
              <div className="mt-16 pt-6 border-t border-dashed border-neutral-200 text-center">
                <a
                  href={activePost.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
                >
                  <span>{language === "en" ? "View original on Dev.to" : "Xem bài viết gốc trên Dev.to"}</span>
                  <BiLinkExternal />
                </a>
              </div>
            </article>
          )}
        </div>
      </section>
    );
  }

  // Render Blogs List View
  return (
    <section
      id="blog"
      className="w-full py-4 bg-white"
      style={{
        fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
      }}
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h1 className="text-2xl text-neutral-900 tracking-wide leading-none">
              {t.myBlog}
            </h1>
          </div>

          {/* Toggle View button */}
          {finalBlogsList.length > 3 && (
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="secondary"
              className="mt-6 md:mt-0"
            >
              <span>
                {isExpanded
                  ? language === "en"
                    ? "Show Less"
                    : "Thu gọn"
                  : t.viewAllPosts}
              </span>
              <BiRightArrowAlt
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
              />
            </Button>
          )}
        </div>

        {loading ? (
          <div className="py-20 text-center font-mono text-xs text-neutral-500">
            {language === "en" ? "Loading posts..." : "Đang tải bài viết..."}
          </div>
        ) : finalBlogsList.length === 0 ? (
          <div className="py-20 text-center font-mono text-xs text-neutral-400">
            {language === "en" ? "No posts published yet." : "Chưa có bài viết nào được xuất bản."}
          </div>
        ) : (
          /* Grid Display */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setActivePostId(blog.id)}
                className="p-6 rounded-none border border-neutral-150 transition-all duration-300 flex flex-col justify-between bg-white hover:border-black group cursor-pointer"
              >
                <div>
                  {/* Meta listing */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 border border-neutral-200 rounded-none text-[10px] font-mono tracking-tighter uppercase text-neutral-500">
                      {blog.tag}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {blog.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold mb-3 tracking-tight leading-snug line-clamp-2 text-neutral-800 group-hover:text-black">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs leading-relaxed line-clamp-4 text-neutral-500">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Read Article Action */}
                <div className="pt-4 mt-6 border-t border-dashed border-neutral-200 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black group-hover:underline">
                  <span>{language === "en" ? "Read Article" : "Đọc bài viết"}</span>
                  <BiRightArrowAlt size={16} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
