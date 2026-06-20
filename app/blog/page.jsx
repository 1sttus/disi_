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
			</div>
		</div>	

		<!-- Primary Page Layout
		================================================== -->
		
		<div class="section padding-page-top padding-bottom over-hide background-dark-2">
			<div class="container">
				<div class="row">
					<div class="col-12 section-title-wrap text-center parallax-fade-top">
						<p>pricing</p>	
						<h1>select the package<br>that fits</h1>
					</div>
				</div>	
			</div>
		</div>
	
		<div class="section padding-bottom-big over-hide background-dark-2">
			<div class="container">
				<div class="row justify-content-center">
	
				<div class="col-md-12 text-center">
					<div class="blog-post-box">
						<h5>Quick Discovery</h5>
						<p class="mb-0 mt-2">1 branding concept, fast estimate, WhatsApp follow-up.</p>
					</div>
				</div>
				<div class="col-md-12 text-center mt-5">
					<div class="blog-post-box">
						<h5>Brand Refresh</h5>
						<p class="mb-0 mt-2">Logo, color system, tone of voice, and social-ready assets.</p>
					</div>
				</div>
				<div class="col-md-12 text-center mt-5">
					<div class="blog-post-box">
						<h5>Project Launch</h5>
						<p class="mb-0 mt-2">Full campaign package, digital guide, and launch support.</p>
					</div>
				</div>
				<div class="col-md-12 text-center mt-5">
					<div class="blog-post-box">
						<h5>Custom Proposal</h5>
						<p class="mb-0 mt-2">Tailored estimate for churches, books, or digital launches.</p>
					</div>
				</div>
				<div class="col-md-12 text-center padding-top" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
					<a href="#" class="cursor-link">
						<div class="project-link-wrap">
							<p>more</p>
							<h4>packages</h4>
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
