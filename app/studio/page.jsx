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
					<li class="nav__list-item active-nav"><a href="/studio" class="cursor-link animsition-link">studio</a></li>
					<li class="nav__list-item"><a href="/blog" class="cursor-link animsition-link">news</a></li>
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
						<p>design studio</p>	
						<h1>we build great<br>brands</h1>
					</div>
				</div>	
			</div>
		</div>
	
		<div class="section padding-bottom over-hide background-dark-2">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-8 text-center">
						<p class="mb-0 pb-0 lead">We help ambitious teams shape clear identities, memorable campaigns, and digital experiences that feel simple to use and hard to forget. Every project starts with careful listening and ends with work built to serve real people.</p>
					</div>
					<div class="section clearfix"></div>
					<div class="col-md-12 padding-top-bottom">
						<div class="img-wrap">
							<img src="/alke/img/studio.jpg" alt="">
						</div>
					</div>
					<div class="col-md-4 text-center" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<h5 class="mb-3">brand strategy</h5>
						<p class="mb-0 pb-0">We define the voice, position, and visual direction that make a brand easier to recognize.</p>
					</div>
					<div class="col-md-4 text-center mt-5 mt-md-0" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<h5 class="mb-3">identity design</h5>
						<p class="mb-0 pb-0">We design flexible systems for logos, type, color, imagery, and day-to-day communication.</p>
					</div>
					<div class="section clearfix"></div>
					<div class="col-md-4 text-center mt-5" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<h5 class="mb-3">campaigns</h5>
						<p class="mb-0 pb-0">We create focused campaign concepts that connect across print, motion, social, and digital channels.</p>
					</div>
					<div class="col-md-4 text-center mt-5" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<h5 class="mb-3">web design</h5>
						<p class="mb-0 pb-0">We build polished websites that balance strong visual design with fast, intuitive user journeys.</p>
					</div>
				</div>	
			</div>			
		</div>
	
		<div class="section padding-top-bottom over-hide background-dark-3">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-7 text-center" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<p class="mb-0 pb-0 lead-q"><em>"Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people."</em></p>
						<h6 class="mt-5">Thomas J. Watson</h6>
					</div>
				</div>	
			</div>			
		</div>
	
		<div class="section padding-top-bottom-big over-hide background-dark">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-7 text-center">
						<a href="/contact" class="cursor-link animsition-link">
							<div class="project-link-wrap">
								<p>let's talk</p>
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
