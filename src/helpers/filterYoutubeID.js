// check if the video is youtube
// https://stackoverflow.com/questions/5157377/show-youtube-video-source-into-html5-video-tag

/* this function only works with youtube url
no embebed youtube url
 this is an embebed url
 https://www.youtube.com/embed/XsA34rRHpuA?rel=0

 this is a normal url
 https://www.youtube.com/watch?v=NIdWvUuEBB0&list=RDNIdWvUuEBB0&start_radio=1
*/
function filterYoutubeId(url) {
  const isYoutube = url.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
  if (isYoutube) {
    let id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
    id = (id.length > 1) ? id.splice(1) : id;
    id = id.toString();
    return id;
  }
  return undefined;
}

// eslint-disable-next-line import/prefer-default-export
export { filterYoutubeId };
