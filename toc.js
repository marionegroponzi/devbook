// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="frequent.html"><strong aria-hidden="true">1.</strong> Frequently Used</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="android.html"><strong aria-hidden="true">2.</strong> Android</a></li><li class="chapter-item expanded "><a href="adb.html"><strong aria-hidden="true">3.</strong> Android Debug Bridge (adb)</a></li><li class="chapter-item expanded "><a href="ansible.html"><strong aria-hidden="true">4.</strong> Ansible</a></li><li class="chapter-item expanded "><a href="automator.html"><strong aria-hidden="true">5.</strong> Automator</a></li><li class="chapter-item expanded "><a href="aws.html"><strong aria-hidden="true">6.</strong> AWS</a></li><li class="chapter-item expanded "><a href="azure.html"><strong aria-hidden="true">7.</strong> Azure</a></li><li class="chapter-item expanded "><a href="bash.html"><strong aria-hidden="true">8.</strong> Bash</a></li><li class="chapter-item expanded "><a href="bazel.html"><strong aria-hidden="true">9.</strong> Bazel</a></li><li class="chapter-item expanded "><a href="bookmarks.html"><strong aria-hidden="true">10.</strong> Bookmarks</a></li><li class="chapter-item expanded "><a href="certificates.html"><strong aria-hidden="true">11.</strong> Certificates</a></li><li class="chapter-item expanded "><a href="cli.html"><strong aria-hidden="true">12.</strong> CLI</a></li><li class="chapter-item expanded "><a href="curlhttpie.html"><strong aria-hidden="true">13.</strong> curl/httpie</a></li><li class="chapter-item expanded "><a href="dart.html"><strong aria-hidden="true">14.</strong> Dart</a></li><li class="chapter-item expanded "><a href="docker.html"><strong aria-hidden="true">15.</strong> Docker</a></li><li class="chapter-item expanded "><a href="english.html"><strong aria-hidden="true">16.</strong> English</a></li><li class="chapter-item expanded "><a href="expect.html"><strong aria-hidden="true">17.</strong> Expect</a></li><li class="chapter-item expanded "><a href="fastlane.html"><strong aria-hidden="true">18.</strong> Fastlane</a></li><li class="chapter-item expanded "><a href="flutter.html"><strong aria-hidden="true">19.</strong> Flutter</a></li><li class="chapter-item expanded "><a href="fd.html"><strong aria-hidden="true">20.</strong> fd</a></li><li class="chapter-item expanded "><a href="find.html"><strong aria-hidden="true">21.</strong> find</a></li><li class="chapter-item expanded "><a href="git.html"><strong aria-hidden="true">22.</strong> git</a></li><li class="chapter-item expanded "><a href="google.html"><strong aria-hidden="true">23.</strong> Google</a></li><li class="chapter-item expanded "><a href="gradle.html"><strong aria-hidden="true">24.</strong> Gradle</a></li><li class="chapter-item expanded "><a href="homebrew.html"><strong aria-hidden="true">25.</strong> Homebrew</a></li><li class="chapter-item expanded "><a href="hurl.html"><strong aria-hidden="true">26.</strong> Hurl</a></li><li class="chapter-item expanded "><a href="ios.html"><strong aria-hidden="true">27.</strong> iOS</a></li><li class="chapter-item expanded "><a href="java.html"><strong aria-hidden="true">28.</strong> Java</a></li><li class="chapter-item expanded "><a href="javascript.html"><strong aria-hidden="true">29.</strong> Javascript</a></li><li class="chapter-item expanded "><a href="jq.html"><strong aria-hidden="true">30.</strong> jq</a></li><li class="chapter-item expanded "><a href="kotlin.html"><strong aria-hidden="true">31.</strong> Kotlin</a></li><li class="chapter-item expanded "><a href="launchctl.html"><strong aria-hidden="true">32.</strong> Launchctl</a></li><li class="chapter-item expanded "><a href="maven.html"><strong aria-hidden="true">33.</strong> Maven</a></li><li class="chapter-item expanded "><a href="mdbook.html"><strong aria-hidden="true">34.</strong> mdbook</a></li><li class="chapter-item expanded "><a href="mojo.html"><strong aria-hidden="true">35.</strong> mojo</a></li><li class="chapter-item expanded "><a href="multitime.html"><strong aria-hidden="true">36.</strong> Multitime</a></li><li class="chapter-item expanded "><a href="nslookup.html"><strong aria-hidden="true">37.</strong> nslookup</a></li><li class="chapter-item expanded "><a href="obs.html"><strong aria-hidden="true">38.</strong> OBS</a></li><li class="chapter-item expanded "><a href="performance.html"><strong aria-hidden="true">39.</strong> Performance</a></li><li class="chapter-item expanded "><a href="python.html"><strong aria-hidden="true">40.</strong> Python</a></li><li class="chapter-item expanded "><a href="ripgrep.html"><strong aria-hidden="true">41.</strong> ripgrep</a></li><li class="chapter-item expanded "><a href="robolectric.html"><strong aria-hidden="true">42.</strong> Robolectric</a></li><li class="chapter-item expanded "><a href="ruby.html"><strong aria-hidden="true">43.</strong> Ruby</a></li><li class="chapter-item expanded "><a href="rust.html"><strong aria-hidden="true">44.</strong> Rust</a></li><li class="chapter-item expanded "><a href="servers.html"><strong aria-hidden="true">45.</strong> Servers</a></li><li class="chapter-item expanded "><a href="restart.html"><strong aria-hidden="true">46.</strong> shutdown/restart</a></li><li class="chapter-item expanded "><a href="ssh.html"><strong aria-hidden="true">47.</strong> ssh</a></li><li class="chapter-item expanded "><a href="swift.html"><strong aria-hidden="true">48.</strong> Swift</a></li><li class="chapter-item expanded "><a href="thermal.html"><strong aria-hidden="true">49.</strong> thermal throttling</a></li><li class="chapter-item expanded "><a href="todo.html"><strong aria-hidden="true">50.</strong> TODO</a></li><li class="chapter-item expanded "><a href="various.html"><strong aria-hidden="true">51.</strong> Various</a></li><li class="chapter-item expanded "><a href="vscode.html"><strong aria-hidden="true">52.</strong> Visual Studio Code</a></li><li class="chapter-item expanded "><a href="vnc.html"><strong aria-hidden="true">53.</strong> VNC</a></li><li class="chapter-item expanded "><a href="xcinfo.html"><strong aria-hidden="true">54.</strong> xcinfo</a></li><li class="chapter-item expanded "><a href="xcode.html"><strong aria-hidden="true">55.</strong> Xcode</a></li><li class="chapter-item expanded "><a href="zip.html"><strong aria-hidden="true">56.</strong> zip</a></li><li class="chapter-item expanded "><a href="zola.html"><strong aria-hidden="true">57.</strong> Zola</a></li><li class="chapter-item expanded "><a href="zsh.html"><strong aria-hidden="true">58.</strong> zsh</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="misc/contributors.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
