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
	
		<div class="section full-height over-hide background-dark-2">
			<div class="case-study-name-title">recent projects</div>
			<ul class="case-study-wrapper">
					<li class="case-study-name">                            	
					<span>Dando Roofing Website</span> <a href="/project" class="cursor-link animsition-link">view project</a>
				</li>
				<li class="case-study-name">                                         	
					<span>For His Reward NGO</span> <a href="/project" class="cursor-link animsition-link">view project</a>
				</li>
				<li class="case-study-name">                                        	
					<span>BCM Conference Branding</span> <a href="/project" class="cursor-link animsition-link">view project</a>
				</li>
				<li class="case-study-name">                                         	
					<span>Christian Author Book Covers</span> <a href="/project" class="cursor-link animsition-link">view project</a>
				</li>
				<li class="case-study-name">                                           	
					<span>Real Estate Landing Page</span> <a href="/project" class="cursor-link animsition-link">view project</a>
				</li>
				<li class="case-study-name">                                         	
					<span>Fintech Mobile App UI</span> <a href="/project" class="cursor-link animsition-link">view project</a>
				</li>
			</ul>
			<ul class="case-study-images">
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/3.jpg');"></div> 
					<div class="dark-over-hero"></div>  
					<div class="hero-number-back">01</div> 
					<div class="hero-number">01</div> 
					<div class="hero-number-fixed">06</div> 
					<div class="case-study-title">Polycarbonate Roofing Website</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/4.jpg');"></div> 
					<div class="hero-number-back">02</div> 
					<div class="hero-number">02</div>  
					<div class="case-study-title">Christian Book Cover Collection</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/1.jpg');"></div>
					<div class="hero-number-back">03</div>  
					<div class="hero-number">03</div> 
					<div class="case-study-title">NGO Campaign Branding</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/5.jpg');"></div> 
					<div class="hero-number-back">04</div> 
					<div class="hero-number">04</div> 
					<div class="case-study-title">Church Conference Media Design</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/2.jpg');"></div> 
					<div class="hero-number-back">05</div> 
					<div class="hero-number">05</div> 
					<div class="case-study-title">UI/UX Mobile App Design</div> 
				</li>
				<li>
					<div class="img-hero-background" style="background-image: url('/alke/img/6.jpg');"></div> 
					<div class="hero-number-back">06</div> 
					<div class="hero-number">06</div> 
					<div class="case-study-title">Corporate Brand Identity</div> 
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
