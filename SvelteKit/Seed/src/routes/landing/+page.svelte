<script lang="ts">
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Navbar from './components/Navbar.svelte';
	import Hero from './components/Hero.svelte';
	import Services from './components/Services.svelte';
	import Features from './components/Features.svelte';
	import PricingPlans from './components/PricingPlans.svelte';
	import CTA from './components/CTA.svelte';
	import Testimonials from './components/Testimonials.svelte';
	import Blogs from './components/Blogs.svelte';
	import Contact from './components/Contact.svelte';
	import Footer from './components/Footer.svelte';
</script>

<PageMeta title="One Page Landing" />

<div class="bg-body-secondary">
	<Navbar />
	<Hero />
	<Services />
	<Features />
	<PricingPlans />
	<CTA />
	<Testimonials />
	<Blogs />
	<Contact />
	<Footer />
</div>
