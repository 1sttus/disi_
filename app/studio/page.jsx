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
<li class="nav__list-item"><a href="/" class="cursor-link animsition-link">home</a></li>
<li class="nav__list-item"><a href="/index-2" class="cursor-link animsition-link">church projects</a></li>
<li class="nav__list-item"><a href="/index-3" class="cursor-link animsition-link">brand projects</a></li>
<li class="nav__list-item"><a href="/studio" class="cursor-link animsition-link">skills & tools</a></li>
<li class="nav__list-item"><a href="/blog" class="cursor-link animsition-link">pricing</a></li>
<li class="nav__list-item"><a href="/contact" class="cursor-link animsition-link">contact</a></li>
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
						<p>skills & tools</p>	
						<h1>what we use to<br>move ideas forward</h1>
					</div>
				</div>	
			</div>
		</div>
	
		<div class="section padding-bottom over-hide background-dark-2">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-8 text-center">
						<p class="mb-0 pb-0 lead">From brand systems to digital tools, we use the right mix of strategy, motion, and interface design to launch projects clearly and consistently.</p>
					</div>
					<div class="section clearfix"></div>
					<div class="col-md-12 padding-top-bottom">
						<div class="img-wrap">
							<img src="/alke/img/studio.jpg" alt="">
						</div>
					</div>
					<div class="col-md-4 text-center" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<h5 class="mb-3">brand systems</h5>
						<p class="mb-0 pb-0">Systematized brand strategy, naming, and messaging for consistent growth.</p>
					</div>
					<div class="col-md-8 text-center mt-5 mt-md-0" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<h5 class="mb-3">motion & digital</h5>
						<p class="mb-0 pb-0">Motion, video, and digital design that helps stories land with clarity.</p>
					</div>
					<div class="section clearfix"></div>
					<div class="col-md-4 text-center mt-5" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<h5 class="mb-3">web & product</h5>
						<p class="mb-0 pb-0">Product and website design that guides users from awareness to action.</p>
					</div>
					<div class="col-md-4 text-center mt-5" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
						<h5 class="mb-3">visual systems</h5>
						<p class="mb-0 pb-0">Visual systems, iconography, and content design that scale with your brand.</p>
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
						<p>2026 © Disi</p>	
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
