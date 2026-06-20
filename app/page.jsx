import LegacyPage from "./LegacyPage";

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
							<li class="active-nav"><a href="/" class="cursor-link animsition-link">case studies</a></li>
							<li><a href="/index-1" class="cursor-link animsition-link">hero slider</a></li>
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
			<div class="case-study-name-title">case studies</div>
			<ul class="case-study-wrapper">
				<li class="case-study-name">                            	
					<span>Reconstype</span> <a href="/project" class="cursor-link animsition-link">explore</a>
				</li>
				<li class="case-study-name">                                         	
					<span>Kresios</span> <a href="/project" class="cursor-link animsition-link">explore</a>
				</li>
				<li class="case-study-name">                                        	
					<span>Chocolates</span> <a href="/project" class="cursor-link animsition-link">explore</a>
				</li>
				<li class="case-study-name">                                         	
					<span>Maybach</span> <a href="/project" class="cursor-link animsition-link">explore</a>
				</li>
				<li class="case-study-name">                                           	
					<span>Anwis Stuttgart</span> <a href="/project" class="cursor-link animsition-link">explore</a>
				</li>
				<li class="case-study-name">                                         	
					<span>Brand Center</span> <a href="/project" class="cursor-link animsition-link">explore</a>
				</li>
			</ul>
			<ul class="case-study-images">
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/3.jpg');"></div> 
					<div class="dark-over-hero"></div>  
					<div class="hero-number-back">01</div> 
					<div class="hero-number">01</div> 
					<div class="hero-number-fixed">06</div> 
					<div class="case-study-title">Graphic design, typography, interaction</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/4.jpg');"></div> 
					<div class="hero-number-back">02</div> 
					<div class="hero-number">02</div>  
					<div class="case-study-title">advertising, art direction</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/1.jpg');"></div>
					<div class="hero-number-back">03</div>  
					<div class="hero-number">03</div> 
					<div class="case-study-title">art direction, photography, retouching</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/5.jpg');"></div> 
					<div class="hero-number-back">04</div> 
					<div class="hero-number">04</div> 
					<div class="case-study-title">photography, advertising, fine arts</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/2.jpg');"></div> 
					<div class="hero-number-back">05</div> 
					<div class="hero-number">05</div> 
					<div class="case-study-title">architecture, exhibition design</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/6.jpg');"></div> 
					<div class="hero-number-back">06</div> 
					<div class="hero-number">06</div> 
					<div class="case-study-title">interior design</div> 
				</li>
			</ul>	
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
  return <LegacyPage bodyClass="over-hide" html={html} slider={false} />;
}
