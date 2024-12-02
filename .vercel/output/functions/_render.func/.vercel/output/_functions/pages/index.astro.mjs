/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead, g as renderComponent } from '../chunks/astro/server_BeH3Xcyf.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Social Media Links"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Familia-PC/Downloads/Landing-page-socialmedia/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProfileSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProfileSection;
  const { imageUrl, name, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" data-astro-cid-dto5xkim> <div class="absolute inset-0 bg-gradient-to-b from-pink-100 to-purple-200 animate-gradient" data-astro-cid-dto5xkim></div> <div class="floating-hearts" data-astro-cid-dto5xkim></div> <div class="z-10 text-center" data-astro-cid-dto5xkim> <img${addAttribute(imageUrl, "src")}${addAttribute(name, "alt")} class="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-6 mx-auto" data-astro-cid-dto5xkim> <h1 class="text-4xl font-bold text-gray-800 mb-4" data-astro-cid-dto5xkim>${name}</h1> <p class="text-xl text-gray-600 max-w-md mx-auto px-4" data-astro-cid-dto5xkim>${description}</p> </div> </section> `;
}, "C:/Users/Familia-PC/Downloads/Landing-page-socialmedia/src/components/ProfileSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$InstagramSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$InstagramSection;
  const { username, profileImage, link, accessToken } = Astro2.props;
  async function getInstagramPosts(token) {
    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=3&access_token=${token}`
      );
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching Instagram posts:", error);
      return [];
    }
  }
  const posts = await getInstagramPosts(accessToken);
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 transition-all duration-500"> <div class="max-w-4xl w-full mx-auto p-8"> <div class="text-center mb-12"> <img${addAttribute(profileImage, "src")} alt="Instagram Profile" class="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6"> <h2 class="text-3xl font-bold text-white mb-4"> <i class="fab fa-instagram"></i> Instagram
</h2> <p class="text-xl text-white mb-6">@${username}</p> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" class="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-200 mb-12">
Follow on Instagram
</a> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${posts.map((post) => renderTemplate`<a${addAttribute(post.permalink, "href")} target="_blank" rel="noopener noreferrer" class="block"> <div class="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200"> <img${addAttribute(post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url, "src")}${addAttribute(post.caption || "Instagram post", "alt")} class="w-full h-64 object-cover"> <div class="p-4"> <p class="text-gray-600 text-sm line-clamp-2">${post.caption || ""}</p> </div> </div> </a>`)} </div> </div> </section>
---`;
}, "C:/Users/Familia-PC/Downloads/Landing-page-socialmedia/src/components/InstagramSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$TikTokSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TikTokSection;
  const { username, profileImage, link, accessToken } = Astro2.props;
  async function getTikTokVideos(token) {
    try {
      const response = await fetch(
        `https://open.tiktokapis.com/v2/video/list/?fields=id,title,cover_image_url,share_url&max_count=3`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching TikTok videos:", error);
      return [];
    }
  }
  const videos = await getTikTokVideos(accessToken);
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-800 transition-all duration-500"> <div class="max-w-4xl w-full mx-auto p-8"> <div class="text-center mb-12"> <img${addAttribute(profileImage, "src")} alt="TikTok Profile" class="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6"> <h2 class="text-3xl font-bold text-white mb-4"> <i class="fab fa-tiktok"></i> TikTok
</h2> <p class="text-xl text-white mb-6">@${username}</p> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" class="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-200 mb-12">
Follow on TikTok
</a> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${videos.map((video) => renderTemplate`<a${addAttribute(video.share_url, "href")} target="_blank" rel="noopener noreferrer" class="block"> <div class="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200"> <img${addAttribute(video.cover_image_url, "src")}${addAttribute(video.title, "alt")} class="w-full h-64 object-cover"> <div class="p-4"> <p class="text-gray-600 text-sm line-clamp-2">${video.title}</p> </div> </div> </a>`)} </div> </div> </section>
---`;
}, "C:/Users/Familia-PC/Downloads/Landing-page-socialmedia/src/components/TikTokSection.astro", void 0);

const $$Astro = createAstro();
const $$SocialSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialSection;
  const { platform, username, profileImage, link, bgColor, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`min-h-screen flex flex-col items-center justify-center ${bgColor} transition-all duration-500`, "class")}> <div class="max-w-2xl w-full mx-auto p-8 text-center"> <img${addAttribute(profileImage, "src")}${addAttribute(`${platform} Profile`, "alt")} class="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6"> <h2 class="text-3xl font-bold text-white mb-4"> <i${addAttribute(icon, "class")}></i> ${platform} </h2> <p class="text-xl text-white mb-6">@${username}</p> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" class="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-200">
Follow on ${platform} </a> </div> </section>`;
}, "C:/Users/Familia-PC/Downloads/Landing-page-socialmedia/src/components/SocialSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Social Links", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="snap-y snap-mandatory h-screen overflow-y-scroll" data-astro-cid-j7pv25f6> <div class="snap-start" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ProfileSection", $$ProfileSection, { "imageUrl": "https://via.placeholder.com/150", "name": "Your Name", "description": "A brief description about yourself that captures your personality and what you do.", "data-astro-cid-j7pv25f6": true })} </div> <div class="snap-start" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "InstagramSection", $$InstagramSection, { "username": "yourusername", "profileImage": "https://via.placeholder.com/150", "link": "https://instagram.com/yourusername", "accessToken": "YOUR_INSTAGRAM_ACCESS_TOKEN", "data-astro-cid-j7pv25f6": true })} </div> <div class="snap-start" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TikTokSection", $$TikTokSection, { "username": "yourusername", "profileImage": "https://via.placeholder.com/150", "link": "https://tiktok.com/@yourusername", "accessToken": "YOUR_TIKTOK_ACCESS_TOKEN", "data-astro-cid-j7pv25f6": true })} </div> <div class="snap-start" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SocialSection", $$SocialSection, { "platform": "Facebook", "username": "yourusername", "profileImage": "https://via.placeholder.com/150", "link": "https://facebook.com/yourusername", "bgColor": "bg-gradient-to-br from-blue-600 to-blue-400", "icon": "fab fa-facebook", "data-astro-cid-j7pv25f6": true })} </div> <div class="snap-start" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SocialSection", $$SocialSection, { "platform": "OnlyFans", "username": "yourusername", "profileImage": "https://via.placeholder.com/150", "link": "https://onlyfans.com/yourusername", "bgColor": "bg-gradient-to-br from-blue-500 to-teal-400", "icon": "fas fa-star", "data-astro-cid-j7pv25f6": true })} </div> <div class="snap-start" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SocialSection", $$SocialSection, { "platform": "Telegram", "username": "yourusername", "profileImage": "https://via.placeholder.com/150", "link": "https://t.me/yourusername", "bgColor": "bg-gradient-to-br from-blue-400 to-blue-300", "icon": "fab fa-telegram", "data-astro-cid-j7pv25f6": true })} </div> <div class="snap-start" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SocialSection", $$SocialSection, { "platform": "Twitch", "username": "yourusername", "profileImage": "https://via.placeholder.com/150", "link": "https://twitch.tv/yourusername", "bgColor": "bg-gradient-to-br from-purple-700 to-purple-500", "icon": "fab fa-twitch", "data-astro-cid-j7pv25f6": true })} </div> </main> ` })} `;
}, "C:/Users/Familia-PC/Downloads/Landing-page-socialmedia/src/pages/index.astro", void 0);

const $$file = "C:/Users/Familia-PC/Downloads/Landing-page-socialmedia/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
