<script lang="ts">
	import 'simplebar';

	import Icon from '@iconify/svelte';

	import user1 from '$lib/assets/images/users/user-1.jpg';
	import user2 from '$lib/assets/images/users/user-2.jpg';
	import user4 from '$lib/assets/images/users/user-4.jpg';
	import user5 from '$lib/assets/images/users/user-5.jpg';
	import user6 from '$lib/assets/images/users/user-6.jpg';
	import {
		Badge,
		Button,
		Col,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Row
	} from '@sveltestrap/sveltestrap';

	type MessageItemType = {
		id: string;
		user: {
			name: string;
			avatar?: string;
			icon?: string;
			bgClass?: string;
		};
		action: string;
		context: string;
		timestamp: string;
		active?: boolean;
	};

	const messages: MessageItemType[] = [
		{
			id: 'message-1',
			user: {
				name: 'Liam Carter',
				avatar: user1
			},
			action: 'uploaded a new document to',
			context: 'Project Phoenix',
			timestamp: '5 minutes ago',
			active: true
		},
		{
			id: 'message-2',
			user: {
				name: 'Ava Mitchell',
				avatar: user2
			},
			action: 'commented on',
			context: 'Marketing Campaign Q3',
			timestamp: '12 minutes ago'
		},
		{
			id: 'message-3',
			user: {
				name: 'Noah Blake',
				icon: 'lucide:shield-check',
				bgClass: 'text-bg-info'
			},
			action: 'updated the status of',
			context: 'Client Onboarding',
			timestamp: '30 minutes ago'
		},
		{
			id: 'message-4',
			user: {
				name: 'Sophia Taylor',
				avatar: user4
			},
			action: 'sent an invoice for',
			context: 'Service Renewal',
			timestamp: '1 hour ago'
		},
		{
			id: 'message-5',
			user: {
				name: 'Ethan Moore',
				avatar: user5
			},
			action: 'completed the task',
			context: 'UI Review',
			timestamp: '2 hours ago'
		},
		{
			id: 'message-6',
			user: {
				name: 'Olivia White',
				avatar: user6
			},
			action: 'assigned you a task in',
			context: 'Sales Pipeline',
			timestamp: 'Yesterday'
		}
	];
</script>

<div class="topbar-item">
	<Dropdown>
		<DropdownToggle nav class="topbar-link py-0 px-1">
			<Icon icon="lucide:mails" class="fs-xxl" />
			<Badge class="text-bg-success badge-circle topbar-badge">7</Badge>
		</DropdownToggle>

		<DropdownMenu end class="dropdown-menu-lg p-0">
			<div class="px-3 py-2 border-bottom">
				<Row class="align-items-center">
					<Col>
						<h6 class="m-0 fs-md fw-semibold">Messages</h6>
					</Col>
					<Col class="text-end">
						<a href={null} class="badge badge-soft-success badge-label py-1">09 Notifications</a>
					</Col>
				</Row>
			</div>

			<div style="max-height: 300px" data-simplebar>
				{#each messages as message (message.id)}
					<div class="notification-item py-2 text-wrap dropdown-item" class:active={message.active}>
						<div class="d-flex gap-3">
							{#if message.user.icon}
								<span class="avatar-md flex-shrink-0">
									<span class="avatar-title rounded-circle fs-22 {message.user.bgClass}">
										<Icon icon={message.user.icon} class="fs-22 fill-white" />
									</span>
								</span>
							{/if}

							{#if message.user.avatar}
								<span class="flex-shrink-0">
									<img
										src={message.user.avatar}
										height="36"
										width="36"
										class="avatar-md rounded-circle"
										alt="User Avatar"
									/>
								</span>
							{/if}

							<span class="flex-grow-1 text-muted">
								<span class="fw-medium text-body">{message.user.name}</span>
								{message.action}
								<span class="fw-medium text-body text-wrap">{message.context}</span>
								<br />
								<span class="fs-xs">{message.timestamp}</span>
							</span>

							<Button color="link" class="flex-shrink-0 text-muted p-0">
								<Icon icon="tabler:xbox-x-filled" class="fs-xxl" />
							</Button>
						</div>
					</div>
				{/each}
			</div>

			<DropdownItem
				class="text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light"
			>
				Read All Messages
			</DropdownItem>
		</DropdownMenu>
	</Dropdown>
</div>
