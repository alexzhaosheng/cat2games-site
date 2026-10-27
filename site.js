"use strict";
// English remains fully readable without JavaScript. Capture it for the language switch.
const english = {title:document.title,description:document.querySelector('meta[name="description"]').content};
document.querySelectorAll("[data-i18n]").forEach(el => {english[el.dataset.i18n] = el.textContent;});
document.querySelectorAll("[data-i18n-alt]").forEach(el => {english[el.dataset.i18nAlt] = el.alt;});
document.querySelectorAll("[data-i18n-aria]").forEach(el => {english[el.dataset.i18nAria] = el.getAttribute("aria-label");});
const chinese = {
  title:"猫二游戏 Cat 2 Studio — 分秒之间与 Klocky",
  description:"认识《分秒之间：发条乐章》和《Klocky》。在猫二游戏的机械世界中解开谜题、谱写旋律，亲手让精妙的机关运转起来。",
  skip:"跳转到正文",navLabel:"主导航",navGames:"我们的游戏",navStudio:"关于工作室",navContact:"联系我们",
  heroEyebrow:"独立游戏 · 好奇心的游乐场",heroTitle:"让机械转动，\n让奇妙发生。",
  heroDescription:"一颗小球，奏出一段旋律；几枚齿轮，拼成一座时钟。我们把探索事物如何运作的乐趣，做成可以亲手游玩的世界。",
  exploreGames:"走进我们的游戏",heroLocation:"来自澳大利亚昆士兰的独立游戏工作室。",heroArtLabel:"我们的游戏",heroNote:"慢慢来，\n发现其中的奇妙。",
  gamesEyebrow:"我们的游戏",gamesTitle:"跟着好奇心出发。",gamesIntro:"两张不同的工作台，同样的乐趣：亲手让一个想法运转起来。",
  momentGenre:"01 / 机械与旋律的谜题",momentSubtitle:"分秒之间：发条乐章",momentStatus:"Steam 即将推出",
  momentLead:"解开谜题，\n谱出旋律。",
  momentDescription:"摆放钟表般运转的弹射机关，调整位置、力度与周期，为落下的小球规划路线。每一次碰撞都会奏出音符；当整套机关顺畅运转，你既能看见答案，也能听见自己的旋律。",
  steamWishlist:"加入 Steam 愿望单",momentPlatforms:"Steam Windows 版 · Google Play 安卓版",
  gameplayTrailer:"实机宣传片 · 游戏原声",videoLanguage:"中文宣传片",
  playTrailer:"播放宣传片",momentPlayLabel:"播放 MOMENT 宣传片",klockyPlayLabel:"播放 Klocky 宣传片",
  videoFallback:"当前浏览器无法播放视频，请前往游戏的 Steam 商店页观看宣传片。",
  videoError:"视频暂时无法加载，你也可以通过旁边的 Steam 链接观看宣传片。",
  momentVideoLabel:"《分秒之间：发条乐章》实机宣传片",
  momentFeature1Title:"把时间变成路线",momentFeature1:"调整位置、角度、力度和运动周期，在 40 个攻关关卡中观察、实验，让小球完成一次又一次接力。",
  momentFeature2Title:"让颜色记录旅程",momentFeature2:"逐层染色，再撤去最新的一层；通过对应颜色的光门，为每颗小球安排完整的旅程。",
  momentFeature3Title:"搭建、演奏，也分享",momentFeature3:"在自由模式与机械工坊里探索运动和声音，搭建机械乐章或可游玩的谜题，再用分享码交流你的创意。",
  momentTimingCaption:"一次恰好的碰撞，开启下一段接力。",momentColourCaption:"把路线、颜色与节奏，组合成一道谜题。",
  momentCoverAlt:"《分秒之间》中铺陈在紫色蓝图上的大型音乐机关",
  momentTimingAlt:"蓝色钟表机械谜题中，弹射器连接着小球的行进路线",
  momentColourAlt:"酒红色背景上的弹射器、染色机关与接收目标",
  momentTimingZoom:"放大截图：《分秒之间》的机关接力",momentColourZoom:"放大截图：《分秒之间》的颜色谜题",
  klockyGenre:"02 / 亲手探索钟表机械",klockySubtitle:"一齿一轮，心归平静。",klockyStatus:"计划于 2027 年 3 月在 Steam 推出",
  klockyLead:"慢下来，\n亲手让时间流动。",
  klockyDescription:"台灯下，一张旧图纸，几枚黄铜齿轮。装上擒纵机构与摆轮，听见机器的第一声滴答。跟着手绘装配图一步步搭建，也翻开图册，认识每台机械背后的历史与巧思。",
  klockyPlatforms:"Windows · 正式版规划包含三十多台机器",klockyVideoLabel:"《Klocky》实机宣传片",
  klockyFeature1Title:"每一齿，都真正驱动下一齿",klockyFeature1:"齿轮比、擒纵机构、凸轮与行星齿轮彼此配合。机器如何运转，由你亲手装入的零件决定。",
  klockyFeature2Title:"每台机器，都有自己的图册",klockyFeature2:"通过版画风格插图，了解机械的历史、原理与精妙细节；再翻到装配图纸，把书中的构想搭建出来。",
  klockyFeature3Title:"亲手组装世界著名大钟",klockyFeature3:"亲手组装布拉格天文钟这样的世界著名大钟，也探索天文仪器、音乐机械与自动机，把机械奇观带到自己的工作台上。",
  klockyBookCaption:"读它的故事，理解它的原理，再亲手组装。",klockyOrreryCaption:"把一座小小的机械太阳系，带到工作台上。",
  klockyCoverAlt:"在《Klocky》中完成组装的布拉格天文钟",
  klockyBookAlt:"打开的机械历史图册，配有版画风格的陀飞轮插图",
  klockyOrreryAlt:"绿色工作台上，黄铜太阳系仪的齿轮、行星臂与太阳",
  klockyBookZoom:"放大截图：《Klocky》的陀飞轮历史图册",klockyOrreryZoom:"放大截图：《Klocky》的太阳系仪",
  developmentNote:"《Klocky》正在开发中，正式版规划包含三十多台机器。页面图片与宣传片展示开发中的游戏内容。",
  studioEyebrow:"关于工作室",studioTitle:"为好奇心，造一个世界。",
  studioDescription:"猫二游戏 Cat 2 Studio 是 CAT TWO GAMES PTY LTD 旗下的独立游戏工作室，位于澳大利亚昆士兰。我们用游戏探索运动、音乐与机械的巧思，邀请你放慢脚步，反复实验，享受亲手让事物运转起来的乐趣。",
  studioSignoff:"一张工作台，一个想法，再试一次。",
  contactEyebrow:"联系我们",contactTitle:"期待与你相遇。",contactDescription:"游戏问题、媒体联系，或想和我们分享你的创意？欢迎来信。",
  legalLocation:"澳大利亚昆士兰 · ABN 88 700 022 751",privacy:"MOMENT 隐私政策",backTop:"回到顶部 ↑",dialogLabel:"游戏截图",closeScreenshot:"关闭截图"
};
const copy = {en:english,zh:chinese};
function setLanguage(lang) {
  if (!copy[lang]) lang = "en";
  const text = copy[lang];
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  document.title = text.title;
  document.querySelector('meta[name="description"]').content = text.description;
  document.querySelectorAll("[data-i18n]").forEach(el => {el.textContent = text[el.dataset.i18n] ?? english[el.dataset.i18n];});
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {el.alt = text[el.dataset.i18nAlt] ?? english[el.dataset.i18nAlt];});
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {el.setAttribute("aria-label",text[el.dataset.i18nAria] ?? english[el.dataset.i18nAria]);});
  document.querySelectorAll("[data-lang]").forEach(el => el.setAttribute("aria-pressed",String(el.dataset.lang === lang)));
  document.querySelectorAll("video[data-game]").forEach(video => {
    const source = video.querySelector("source");
    const path = "/assets/games/" + video.dataset.game + "-" + lang + ".mp4";
    if (source.getAttribute("src") !== path) {
      video.pause(); source.setAttribute("src",path); video.load();
      const playButton=video.closest("figure").querySelector("[data-play]");
      if(playButton) playButton.hidden=false;
      video.closest("figure").querySelector(".video-error").hidden = true;
    }
  });
  try {localStorage.setItem("cat2-language",lang);} catch (_) { /* Optional preference storage. */ }
}
let language = new URLSearchParams(location.search).get("lang");
if (!copy[language]) {try {language=localStorage.getItem("cat2-language");} catch (_) {}}
if (!copy[language]) language = navigator.language.startsWith("zh") ? "zh" : "en";
setLanguage(language);
document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click",() => {
  setLanguage(button.dataset.lang);
  const url = new URL(location.href); url.searchParams.set("lang",button.dataset.lang);
  history.replaceState(null,"",url);
}));
const videos=[...document.querySelectorAll("video[data-game]")];
document.querySelectorAll("[data-play]").forEach(button => {
  const video=document.querySelector('video[data-game="'+button.dataset.play+'"]');
  button.addEventListener("click",async () => {
    try {await video.play();} catch (error) {
      if(error.name!=="AbortError") video.closest("figure").querySelector(".video-error").hidden=false;
    }
  });
  video.addEventListener("playing",() => {button.hidden=true;});
  video.addEventListener("pause",() => {button.hidden=false;});
  video.addEventListener("ended",() => {button.hidden=false;});
});
videos.forEach(video => {
  video.addEventListener("play",() => videos.forEach(other => {if(other!==video) other.pause();}));
  video.addEventListener("error",() => {video.closest("figure").querySelector(".video-error").hidden=false;});
});
const imageDialog=document.getElementById("image-dialog");
let lastGalleryButton=null;
document.querySelectorAll(".gallery-button").forEach(button => button.addEventListener("click",() => {
  lastGalleryButton=button;
  document.getElementById("expanded-image").src=button.dataset.full;
  document.getElementById("expanded-image").alt=button.querySelector("img").alt;
  document.getElementById("image-caption").textContent=button.closest("figure").querySelector("figcaption").textContent;
  imageDialog.showModal();
}));
document.querySelector(".dialog-close").addEventListener("click",() => imageDialog.close());
imageDialog.addEventListener("click",event => {
  const rect=imageDialog.getBoundingClientRect();
  if(event.target===imageDialog && (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom)) imageDialog.close();
});
imageDialog.addEventListener("close",() => {if(lastGalleryButton) lastGalleryButton.focus();});
