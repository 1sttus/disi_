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
						<p>get in touch</p>	
						<h1>always ready<br>to work</h1>
					</div>
				</div>	
			</div>
		</div>
	
		<div class="section padding-bottom-big over-hide background-dark-2">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-10 text-center">
						<p class="lead mb-4">Want to move a project forward? Send a quick message on WhatsApp and we’ll respond quickly with the best next step.</p>
						<a href="https://wa.me/2348083439684" class="btn-draw cursor-link" target="_blank" rel="noopener noreferrer"><span class="btn-draw__text"><span>Chat on WhatsApp</span></span></a>
					</div>
				</div>
			</div>
<div class="section padding-top-bottom-big over-hide">
	
			<div class="parallax" style="background-image: url('/alke/img/map.jpg')"></div>
			<div class="dark-over-pages"></div>
			
			<div class="section z-bigger">
				<div class="container z-bigger">
					<div class="row justify-content-center">
						<div class="col-md-7 text-center" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
							<h5>99-81 Middagh St, Brooklyn<br>NY 11201, USA</h5>
						</div>
						<div class="section clearfix"></div>
						<div class="col-md-7 mt-5 text-center" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
							<a href="https://www.google.com/maps/place/99-81+Middagh+St,+Brooklyn,+NY+11201,+USA/@40.6999552,-73.9936128,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a36fb73a3d1:0xb653e2f02fd08084!8m2!3d40.6999552!4d-73.9914241" class="contact-link cursor-link" target="_blank">find us on map</a>
						</div>
					</div>	
				</div>	
			</div>		
		</div>
	
		<div class="section padding-top-bottom-big over-hide background-dark">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-12 text-center">
						<a href="mailto:hello@disi.com" class="cursor-link">
							<div class="project-link-wrap on-contact">
								<p>hello@disi.com</p>
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
