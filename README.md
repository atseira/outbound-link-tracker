# outbound-link-tracker
Google Analytics and Facebook Pixel outbound link click event tracking.

With script in edit_onclick_manually.html, we must edit the \<a\> element onclick attribute manually.
Make the attribute onclick in an \<a\> element like this:

  \<a onclick="track_control(outbound_link)" href="..."\> ... \</a\>

Change the "outbound_link" according to the var name set in the beginning of the script.
