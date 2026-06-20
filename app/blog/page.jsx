import LegacyPage from "../LegacyPage";

const html = `<!-- Page preloader wrap
	================================================== -->

	<div class="animsition">
		
		<!-- Nav and Logo
		================================================== -->

		<header class="cd-header">
			<div class="header-wrapper">
				<div class="logo-wrap">
					<a href="/" class="cursor-link animsition-link"><img src="/alke/img/logo.png" alt=""></a>
				</div>
				<div class="nav-but-wrap">
					<div class="menu-icon cursor-link">
						<span class="menu-icon__line menu-icon__line-left"></span>
						<span class="menu-icon__line"></span>
						<span class="menu-icon__line menu-icon__line-right"></span>
					</div>					
				</div>					
			</div>				
		</header>

		<div class="nav">
			<div class="nav__content">
				<ul class="nav__list">
					<li class="nav__list-item"><a data-toggle="collapse" href="#collapseSub" class="cursor-link" role="button" aria-expanded="false" aria-controls="collapseSub">work</a>
						<ul class="sub-links collapse" id="collapseSub">
							<li><a href="/" class="cursor-link animsition-link">case studies</a></li>
							<li><a href="/index-1" class="cursor-link animsition-link">hero slider</a></li>
							<li><a href="/index-2" class="cursor-link animsition-link">boring masonry</a></li>
							<li><a href="/index-3" class="cursor-link animsition-link">floating title</a></li>
							<li><a href="/index-4" class="cursor-link animsition-link">gallery version</a></li>
						</ul>
					</li>
					<li class="nav__list-item"><a href="/studio" class="cursor-link animsition-link">studio</a></li>
					<li class="nav__list-item active-nav"><a href="/blog" class="cursor-link animsition-link">news</a></li>
					<li class="nav__list-item"><a href="/contact" class="cursor-link animsition-link">contact</a></li>
				</ul>
			</div>
		</div>	

		<!-- Primary Page Layout
		================================================== -->
		
		<div class="section padding-page-top padding-bottom over-hide background-dark-2">
			<div class="container">
				<div class="row">
					<div class="col-12 section-title-wrap text-center parallax-fade-top">
						<p>news</p>	
						<h1>a place full<br>of stuff</h1>
					</div>
				</div>	
			</div>
		</div>
	
		<div class="section padding-bottom-big over-hide background-dark-2">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-12 text-center">
						<a href="/post" class="cursor-link-blog-post-1 animsition-link tipped" data-title="<span><em>by Maria Kulis</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":60}'>
							<div class="blog-post-box">
								<h5>We want to share with you our mood after selection.</h5>
								<p class="mb-0 mt-2">october 27, 2018</p>
							</div>
						</a>
					</div>
					<div class="col-md-12 text-center mt-5">
						<a href="/post" class="cursor-link-blog-post-2 animsition-link tipped" data-title="<span><em>by Dexter Lazich</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":60}'>
							<div class="blog-post-box">
								<h5>Sleep, code, eat, travel. Repeat.</h5>
								<p class="mb-0 mt-2">october 24, 2018</p>
							</div>
						</a>
					</div>
					<div class="col-md-12 text-center mt-5">
						<a href="/post" class="cursor-link-blog-post-3 animsition-link tipped" data-title="<span><em>by Anna Johnson</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":60}'>
							<div class="blog-post-box">
								<h5>Don’t get lost quoting your next projects.</h5>
								<p class="mb-0 mt-2">october 23, 2018</p>
							</div>
						</a>
					</div>
					<div class="col-md-12 text-center mt-5">
						<a href="/post" class="cursor-link-blog-post-4 animsition-link tipped" data-title="<span><em>by Maria Kulis</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":60}'>
							<div class="blog-post-box">
								<h5>Don´t give up, keep on focus.</h5>
								<p class="mb-0 mt-2">october 21, 2018</p>
							</div>
						</a>
					</div>
					<div class="col-md-12 text-center mt-5" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<a href="/post" class="cursor-link-blog-post-5 animsition-link tipped" data-title="<span><em>by John Kulis</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":60}'>
							<div class="blog-post-box">
								<h5>Moments from a life. Day of photography.</h5>
								<p class="mb-0 mt-2">october 19, 2018</p>
							</div>
						</a>
					</div>
					<div class="col-md-12 text-center mt-5" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<a href="/post" class="cursor-link-blog-post-6 animsition-link tipped" data-title="<span><em>by Darco Furius</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":60}'>
							<div class="blog-post-box">
								<h5>How you look at it is pretty much how you'll see it.</h5>
								<p class="mb-0 mt-2">october 17, 2018</p>
							</div>
						</a>
					</div>
					<div class="col-md-12 text-center mt-5" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<a href="/post" class="cursor-link-blog-post-7 animsition-link tipped" data-title="<span><em>by Maria Kulis</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":60}'>
							<div class="blog-post-box">
								<h5>Don´t give up, keep on focus.</h5>
								<p class="mb-0 mt-2">october 16, 2018</p>
							</div>
						</a>
					</div>
					<div class="col-md-12 text-center padding-top" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<a href="#" class="cursor-link">
							<div class="project-link-wrap">
								<p>older</p>
								<h4>news</h4>
							</div>
						</a>
					</div>
				</div>	
			</div>			
		</div>
	
		<div class="section padding-top-bottom-small background-black">	
			<div class="container-fluid px-5">
				<div class="row">
					<div class="col-md-6 footer text-center text-md-left">
						<p>2019 © <a href="https://themeforest.net/user/ig_design/portfolio" class="cursor-link">Alke</a> template by <a href="https://themeforest.net/user/ig_design/portfolio" class="cursor-link">IG Design</a></p>	
					</div>
					<div class="col-md-6 mt-4 mt-md-0 text-center">
						<div class="social-wrap on-footer">
							follow us
							<ul>
								<li><a href="#" class="cursor-link">fb</a></li>
								<li><a href="#" class="cursor-link">tw</a></li>
								<li><a href="#" class="cursor-link">be</a></li>
							</ul>
						</div>	
					</div>	
				</div>	
			</div>			
		</div>
		
		<div class="scroll-to-top cursor-link"></div>
	
	<!-- Page cursor
	================================================== -->
	
	<div class="cursor cursor-shadow"></div>
	<div class="cursor cursor-dot"></div>


	</div>`;

export default function Page() {
  return <LegacyPage bodyClass="" html={html} slider={false} />;
}
