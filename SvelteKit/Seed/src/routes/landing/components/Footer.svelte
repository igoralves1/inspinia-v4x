<script lang="ts">
	import { author, currentYear } from '$lib/helpers';
	import Icon from '@iconify/svelte';

	import logoWhite from '$lib/assets/images/logo-white.png';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';

	const socialLinks = [
		{ title: 'Facebook', icon: 'tabler-brand-facebook', url: '#' },
		{ title: 'Twitter-x', icon: 'tabler-brand-x', url: '#' },
		{ title: 'Instagram', icon: 'tabler-brand-instagram', url: '#' },
		{ title: 'WhatsApp', icon: 'tabler-brand-whatsapp', url: '#' }
	];

	const footerLinks = [
		{
			title: 'Company',
			links: [
				{ name: 'Our Story', url: '#' },
				{ name: 'Leadership Team', url: '#' },
				{
					name: 'Careers',
					url: '#',
					badge: { title: "We're Hiring", variant: 'warning' }
				},
				{ name: 'Press & Media', url: '#' },
				{ name: 'Investor Relations', url: '#' },
				{ name: 'Sustainability', url: '#' }
			]
		},
		{
			title: 'Community',
			links: [
				{ name: 'Community Forum', url: '#' },
				{ name: 'Events & Meetups', url: '#' },
				{ name: 'Ambassadors', url: '#' },
				{ name: 'Customer Stories', url: '#' },
				{ name: 'Open Source', url: '#' },
				{ name: 'Code of Conduct', url: '#' }
			]
		},
		{
			title: 'Admin',
			links: [
				{ name: 'Dashboard', url: '#' },
				{ name: 'User Management', url: '#' },
				{ name: 'Roles & Permissions', url: '#' },
				{ name: 'System Logs', url: '#' },
				{ name: 'Settings', url: '#' },
				{ name: 'API Access', url: '#' }
			]
		}
	];
</script>

<footer class="section-custom section-footer pb-2">
	<Container>
		<Row class="g-4 justify-content-between">
			<Col lg="3">
				<img src={logoWhite} alt="logo" height="30" />
				<p class="mt-3 fs-sm">
					INSPINIA is the top-selling admin dashboard template on WrapBootstrap, known for its sleek
					design, flexibility, and powerful features. Build modern web applications with ease using
					the best in class!
				</p>

				<div class="d-flex gap-2 mt-4 mb-2">
					{#each socialLinks as link, idx (idx)}
						<a href={link.url} class="btn btn-sm btn-icon rounded-circle btn-dark">
							<Icon icon={link.icon} class="fs-lg" />
						</a>
					{/each}
				</div>
			</Col>

			<Col lg="8" xxl="7">
				<Row class="g-4">
					{#each footerLinks as section, idx (idx)}
						<Col sm="6" md="4">
							<h5 class="text-white mb-4 ps-2">{section.title}</h5>
							<ul class="nav flex-column">
								{#each section.links as link, index (index)}
									<li class="nav-item">
										<a class="nav-link {index === 0 ? 'pt-0' : ''}" href={link.url}>
											{link.name}
											{#if link.badge}
												<span class="ms-2 badge text-bg-{link.badge.variant}"
													>{link.badge.title}</span
												>
											{/if}
										</a>
									</li>
								{/each}
							</ul>
						</Col>
					{/each}
				</Row>
			</Col>
		</Row>

		<Row class="mt-5">
			<div class="col-12 text-center">
				<p class="mb-4">
					© 2014 - {currentYear} Inspinia By
					<span class="fw-semibold">{author}</span>
				</p>
			</div>
		</Row>
	</Container>
</footer>
