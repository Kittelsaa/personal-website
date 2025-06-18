import rss from "@astrojs/rss";
import { SITE_TITLE } from "../config"; 
import { getCollection } from "astro:content";

export async function GET(context) { 
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: "A personal website template", 
    site: context.site, 
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
