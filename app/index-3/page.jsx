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
						<p>brand projects</p> 	
						<h1>brand projects<br>you can trust</h1>
					</div>
				</div>	
			</div>
		</div>
	
		<div class="section padding-bottom over-hide background-dark-2">	
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div id="portfolio-filter" class="portfolio-filter">
							<ul id="filter">
								<li><a href="#" class="current cursor-link" data-filter="*" title="">all</a></li>
								<li><a href="#" class="cursor-link" data-filter=".branding" title="">branding</a></li>
								<li><a href="#" class="cursor-link" data-filter=".photo" title="">photo</a></li>
								<li><a href="#" class="cursor-link" data-filter=".motion" title="">motion</a></li>
							</ul>
						</div>
					</div>
				</div>	
			</div>
						
			<div id="projects-grid">
						<a href="/project" class="cursor-link animsition-link tipped" data-title="Brand website <span><em>web design</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box photo">
						<img src="/alke/img/portfolio/4.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
				<a href="/project" class="cursor-link animsition-link tipped" data-title="Christian Book Cover <span><em>branding</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box motion">
						<img src="/alke/img/portfolio/9.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
				<a href="/project" class="cursor-link animsition-link tipped" data-title="NGO Campaign <span><em>identity</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box branding">
						<img src="/alke/img/portfolio/3.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
				<a href="/project" class="cursor-link animsition-link tipped" data-title="Church Event Social <span><em>campaign</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box photo">
						<img src="/alke/img/portfolio/5.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
				<a href="/project" class="cursor-link animsition-link tipped" data-title="Conference Materials <span><em>design</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box motion">
						<img src="/alke/img/portfolio/8.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
				<a href="/project" class="cursor-link animsition-link tipped" data-title="Venue Collateral <span><em>identity</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box branding">
						<img src="/alke/img/portfolio/2.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
				<a href="/project" class="cursor-link animsition-link tipped" data-title="Event Signage <span><em>design</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box photo">
						<img src="/alke/img/portfolio/1.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
				<a href="/project" class="cursor-link animsition-link tipped" data-title="Brand System <span><em>strategy</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box motion">
						<img src="/alke/img/portfolio/7.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
				<a href="/project" class="cursor-link animsition-link tipped" data-title="Digital Identity <span><em>package</em></span>" data-tipper-options='{"direction":"top","follow":"true","margin":30}'>
					<div class="portfolio-box photo">
						<img src="/alke/img/portfolio/6.jpg" alt="">
						<div class="portfolio-mask"></div>
					</div>
				</a>
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
