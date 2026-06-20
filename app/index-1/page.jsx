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
					<li class="nav__list-item active-nav"><a data-toggle="collapse" href="#collapseSub" class="cursor-link" role="button" aria-expanded="false" aria-controls="collapseSub">work</a>
						<ul class="sub-links collapse" id="collapseSub">
							<li><a href="/" class="cursor-link animsition-link">case studies</a></li>
							<li class="active-nav"><a href="/index-1" class="cursor-link animsition-link">hero slider</a></li>
							<li><a href="/index-2" class="cursor-link animsition-link">boring masonry</a></li>
							<li><a href="/index-3" class="cursor-link animsition-link">floating title</a></li>
							<li><a href="/index-4" class="cursor-link animsition-link">gallery version</a></li>
						</ul>
					</li>
					<li class="nav__list-item"><a href="/studio" class="cursor-link animsition-link">studio</a></li>
					<li class="nav__list-item"><a href="/blog" class="cursor-link animsition-link">news</a></li>
					<li class="nav__list-item"><a href="/contact" class="cursor-link animsition-link">contact</a></li>
				</ul>
			</div>
		</div>	

		<!-- Primary Page Layout
		================================================== -->
	
		<div class="section full-height over-hide background-dark-2">
			<div class="velo-slides" data-velo-slider="on" data-velo-theme="light">
			
				<!-- Slide -->
				<section class="velo-slide">		   
					<!-- Slide BG -->
					<div class="velo-slide__bg">      
						<!-- Img -->
						<figure class="velo-slide__figure" style="background-image: url(/alke/img/4.jpg)"></figure>
					</div>
							
					<!-- Header -->		
					<header class="velo-slide__header">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<h3 class="velo-slide__title"><span class="oh"><span>Kresios</span></span></h3>
									<p class="velo-slide__text"><span class="oh"><span>advertising, art direction</span></span></p>
									<span class="velo-slide__btn"><a class="btn-draw cursor-link animsition-link" href="/project"><span class="btn-draw__text"><span>View Work</span></span></a></span>
								</div>
							</div>	
						</div>
					</header>
				</section>

				<!-- Slide -->
				<section class="velo-slide">
					<!-- Slide BG -->
					<div class="velo-slide__bg">
						<!-- Img -->
						<figure class="velo-slide__figure" style="background-image: url(/alke/img/5.jpg)"></figure>
					</div>
			
					<!-- Header -->
					<header class="velo-slide__header">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<h3 class="velo-slide__title"><span class="oh"><span>Maybach</span></span></h3>
									<p class="velo-slide__text"><span class="oh"><span>photography, advertising, fine arts</span></span></p>
									<span class="velo-slide__btn"><a class="btn-draw cursor-link animsition-link" href="/project"><span class="btn-draw__text"><span>View Project</span></span></a></span>
								</div>
							</div>	
						</div>
					</header>
				</section>
			
				<!-- Slide - with Video -->
				<section class="velo-slide">
					<!-- Slide BG -->
					<div class="velo-slide__bg">
						<!-- Img -->
						<figure class="velo-slide__figure" style="background-image: url(/alke/img/3.jpg)"></figure>
					</div>
					
					<!-- Header -->
					<header class="velo-slide__header">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<h3 class="velo-slide__title"><span class="oh"><span>Reconstype</span></span></h3>
									<p class="velo-slide__text"><span class="oh"><span>Graphic design, typography, interaction</span></span></p>
									<span class="velo-slide__btn"><a class="btn-draw cursor-link animsition-link" href="/project"><span class="btn-draw__text"><span>View Project</span></span></a></span>
								</div>
							</div>	
						</div>
					</header>
				</section>
			
				<!-- Slides Nav -->
				<nav class="velo-slides-nav">
					<ul class="velo-slides-nav__list">
						<li>
							<a class="js-velo-slides-prev velo-slides-nav__prev inactive cursor-link" href="#0"><i class="icon-up-arrow"></i></a>
						</li>
						<li>
							<a class="js-velo-slides-next velo-slides-nav__next cursor-link" href="#"><i class="icon-down-arrow"></i></a>
						</li>
					</ul>
				</nav>
			</div>		
			<div class="social-wrap">
				follow us
				<ul>
					<li><a href="#" class="cursor-link">fb</a></li>
					<li><a href="#" class="cursor-link">tw</a></li>
					<li><a href="#" class="cursor-link">be</a></li>
				</ul>
			</div>	
		</div>
	
	<!-- Page cursor
	================================================== -->
	
	<div class="cursor cursor-shadow"></div>
	<div class="cursor cursor-dot"></div>


	</div>`;

export default function Page() {
  return <LegacyPage bodyClass="over-hide" html={html} slider={true} />;
}
