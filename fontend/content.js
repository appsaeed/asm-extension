function do_somthing() {
  $("article.db-new-content.js-db-cont").css("display", "none");
}

if (window.location.origin == "https://www.fiverr.com") {
  let exp = /balance|manage_orders|seller_dashboard/gi;
  if (exp.test(window.location.href)) {
    do_somthing();
  }
}

javascript: (function () {
  if (
    window.location.origin == "https://www.youtube.com" &&
    window.location.pathname.slice(1) == "watch"
  ) {
    function skip_add(clazz) {
      const buttons = document.getElementsByClassName(clazz);
      for (const button of buttons) {
        button.click();
        console.log("No More Ad");
      }
    }

    function add_skip2() {
      $("#homepage-sidebar-ads").remove();
      $(
        "#google_companion_ad_div, #watch-channel-brand-div, #watch-channel-brand-div"
      ).remove();

      var $cross = document.getElementsByClassName(
        "ytp-ad-overlay-close-container"
      )[0];
      var $skip = document.getElementsByClassName("ytp-ad-skip-button")[0];
      if ($cross != undefined) {
        $cross.click();
        console.log("Youtube Add Removed");
      }
      if ($skip != undefined) {
        $skip.click();
        console.log("Youtube Add Removed");
      }
    }

    setInterval(function () {
      //Youtube add remove function
      skip_add(".ytp-ad-skip-button-text");
      skip_add(".ytp-ad-overlay-close-button");
      add_skip2();

      /*
       * remove add from next line
       */
      if ($(".video-ads.ytp-ad-module") !== null) {
        $(".video-ads.ytp-ad-module").remove();
      }

      if ($(".ytp-ad-overlay-close-button") !== null) {
        $(".ytp-ad-overlay-close-button").click();
      }

      if ($(".ytp-ad-skip-button") !== null) {
        $(".ytp-ad-skip-button").click();
      }

      if ($(".ytp-ad-text.ytp-ad-skip-button-text") !== null) {
        $(".ytp-ad-text.ytp-ad-skip-button-text").click();
      }
      //Youtube Sidebar add Remove
      if (
        $(
          "ytd-companion-slot-renderer.style-scope.ytd-player-legacy-desktop-watch-ads-renderer"
        ) !== null
      ) {
        $(
          "ytd-companion-slot-renderer.style-scope.ytd-player-legacy-desktop-watch-ads-renderer"
        ).remove();
      }
    }, 2000);
  }
})();

(function removeAdvertisementAndBlockingElements() {
  $(".inRek").remove();
  $(".mgbox").remove();

  Array.from(document.getElementsByTagName("img")).forEach(function (e) {
    if (!e.src.includes(window.location.host)) {
      e.remove();
    }
  });

  Array.from(document.getElementsByTagName("div")).forEach(function (e) {
    var currentZIndex = parseInt(
      document.defaultView.getComputedStyle(e, null).zIndex
    );
    if (currentZIndex > 999) {
      console.log(parseInt(currentZIndex));
      e.remove();
    }
  });
})();

document.cookie = "VISITOR_INFO1_LIVE=oKckVSqvaGw; path=/; domain=.youtube.com";
