# Official store badge audit

The supplied reference ZIP identifies the official badge artwork as the Google Play Store badge SVG and Download on the App Store badge SVG. Both files were downloaded from those exact reference URLs, uploaded to managed storage, and wired into the Vayal app section.

A browser console measurement after jumping to the app section reported the two badge images at 48px height but 0px width during the first lazy-load measurement. The next verification pass should ensure the SVG images have stable width constraints and are visible after loading, rather than relying on width:auto alone.
