// many codes here ... Find lines like below:

var outbound_link_1 = {
  selector: "#wa_link_1",
  ga_e_category: "WA link 1",
  ga_e_action: "click",
  ga_e_label: "WA link 1 click",

  fb_event: "Lead", // FB standard events here
  fb_name: "WA link 1 click",
  fb_category: "WA link 1",
  url: jQuery("#wa_link_1").attr("href")
}

var outbound_link_2 = {
  selector: "#wa_link_2",
  ga_e_category: "WA link 2",
  ga_e_action: "click",
  ga_e_label: "WA link 2 click",

  fb_event: "Lead", // FB standard events here
  fb_name: "WA link 2 click",
  fb_category: "WA link 2",
  url: jQuery("#wa_link_2").attr("href")
}

var outbound_link_3 = {
  selector: "a[href='https://google.com/']",
  ga_e_category: "Google button",
  ga_e_action: "click",
  ga_e_label: "Google button click",

  fb_event: "ViewContent", // FB standard events here
  fb_name: "Google button click",
  fb_category: "Google button",
  url: jQuery("a[href='https://google.com/']").attr("href")
}

// ... many code here ...

/**
 * In document ready part:
 */
jQuery( document ).ready( function() {
  jQuery(outbound_link_1.selector).attr("onclick", "track_control(outbound_link_1)");
  jQuery(outbound_link_2.selector).attr("onclick", "track_control(outbound_link_2)");
  jQuery(outbound_link_3.selector).attr("onclick", "track_control(outbound_link_3)");

})
