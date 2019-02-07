# outbound-link-tracker
Google Analytics and Facebook Pixel outbound link click event tracking.

With script in edit_onclick_manually.html, we must edit the <a> onclick attribute manually.
Make the attribute onclick like this:
  <a href="..." onclick="track_control(outbound_link)">...</a>
Change the "outbound_link" according to the var name set in the beginning of the script.
