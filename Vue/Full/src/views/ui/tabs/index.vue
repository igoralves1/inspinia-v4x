<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Tabs" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol cols="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BCardTitle tag="h4">Examples</BCardTitle>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Documentation and examples on how to use Bootstrap’s tab components.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/tabs.html"
                                target="_blank">
                                Tabs on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xxl="6">
                    <UICard title="Default Tabs" isCollapsable>
                        <BTabs nav-class="mb-3">
                            <BTab title="Overview" id="home">
                                <p class="mb-0">
                                    This dashboard provides a quick overview of your recent activity, performance
                                    metrics,
                                    and system status. You can easily monitor key indicators, recent logins, pending
                                    tasks,
                                    and overall user engagement.
                                </p>
                            </BTab>
                            <BTab title="Activity" id="profile" active>
                                <p class="mb-0">
                                    View your latest interactions and actions taken across the platform. This includes
                                    recent file uploads, comments, status updates, and notification history to keep you
                                    up
                                    to date with ongoing changes.
                                </p>
                            </BTab>
                            <BTab title="Settings" id="settings">
                                <p class="mb-0">
                                    Customize your account preferences including theme options, notification settings,
                                    and
                                    privacy controls. Adjust layout configurations to suit your workflow and manage
                                    integration with third-party services.
                                </p>
                            </BTab>
                            <BTab title="Disabled" disabled />
                        </BTabs>
                    </UICard>
                </BCol>

                <BCol xxl="6">
                    <UICard title="Tabs Justified" isCollapsable>
                        <BTabs nav-class="mb-3" justified>
                            <BTab title="Overview">
                                <p class="mb-0">
                                    Get a high-level summary of recent activity, key performance indicators, and
                                    important
                                    announcements. Stay informed and make quick decisions based on real-time insights.
                                </p>
                            </BTab>
                            <BTab title="Profile" active>
                                <p class="mb-0">
                                    Customize your profile, update personal information, and manage security settings
                                    like
                                    passwords and 2FA. Keep your account secure and up to date with your latest details.
                                </p>
                            </BTab>
                            <BTab title="Settings">
                                <p class="mb-0">Configure system preferences, theme options, and notification settings.
                                    Easily adapt the platform to fit your workflow and preferences.</p>
                            </BTab>
                            <BTab title="Projects">
                                <p class="mb-0">View and manage all ongoing projects, tasks, and milestones. Collaborate
                                    with your team and track progress in real-time.</p>
                            </BTab>
                            <BTab title="Support">
                                <p class="mb-0">Need help? Reach out to our support team or browse the help center for
                                    common questions, guides, and documentation.</p>
                            </BTab>
                        </BTabs>
                    </UICard>
                </BCol>

                <BCol xxl="6">
                    <UICard title="Tabs Vertical Left" isCollapsable>
                        <p class="text-muted">
                            You can stack your navigation by changing the flex item direction with the
                            <code>.flex-column</code> utility.
                        </p>
                        <b-row>
                            <BTabs content-class="pt-0" nav-class="text-left" nav-wrapper-class="col-sm-3 mb-2 mb-sm-0"
                                pills vertical justified>
                                <BTab title="Overview" active>

                                    <p class="mb-2">Welcome to your dashboard. Get an at-a-glance view of your recent
                                        activity, top stats, and personalized suggestions to enhance productivity and
                                        stay
                                        on track.</p>
                                    <ul>
                                        <li>View total project status</li>
                                        <li>Quick links to recent files</li>
                                        <li>Weekly performance charts</li>
                                    </ul>
                                    <p class="mb-0">Your dashboard is tailored to your activity and roles. Stay informed
                                        and
                                        always one step ahead.</p>
                                </BTab>
                                <BTab title="Profile">
                                    <p class="mb-2">Manage your personal details, change your profile photo, and update
                                        your
                                        contact information.</p>
                                    <ul>
                                        <li>Name, Email, Phone</li>
                                        <li>Change Password</li>
                                        <li>Activity logs and preferences</li>
                                    </ul>
                                    <p class="mb-0">Keeping your profile up to date ensures a better and more secure
                                        experience.</p>
                                </BTab>
                                <BTab title="Settings">
                                    <p class="mb-2">Customize your preferences, notification options, and privacy
                                        settings.
                                    </p>
                                    <ul>
                                        <li>Theme selection: Light / Dark mode</li>
                                        <li>Email &amp; push notification toggles</li>
                                        <li>Linked accounts and integrations</li>
                                    </ul>
                                    <p class="mb-0">Settings help personalize your interface and improve your workflow
                                        efficiency.</p>
                                </BTab>
                                <BTab title="Projects">
                                    <p class="mb-2">Track all your active, completed, and upcoming projects in one
                                        place.
                                    </p>
                                    <ul>
                                        <li>Kanban board and Gantt charts</li>
                                        <li>Task assignments and deadlines</li>
                                        <li>Progress indicators and timelines</li>
                                    </ul>
                                    <p class="mb-0">Use collaboration tools, upload documents, and manage deliverables
                                        directly from here.</p>
                                </BTab>
                                <BTab title="Support">
                                    <p class="mb-2">Need assistance? Access our help center or contact our support team
                                        directly.</p>
                                    <ul>
                                        <li>Browse FAQs and tutorials</li>
                                        <li>Submit a support ticket</li>
                                        <li>Live chat with support agents</li>
                                    </ul>
                                    <p class="mb-0">We’re here 24/7 to assist you with anything you need—technical or
                                        account-related.</p>
                                </BTab>
                            </BTabs>
                        </b-row>
                    </UICard>
                </BCol>

                <BCol xxl="6">
                    <UICard title="Tabs with Colored Navs" isCollapsable>
                        <p class="text-muted">
                            You can stack your navigation by changing the flex item direction with the
                            <code>.flex-column</code> utility.
                        </p>
                        <b-row>
                            <BTabs active-nav-item-class="bg-secondary" content-class="pt-0" nav-class="text-left"
                                nav-wrapper-class="col-sm-3 mb-2 mb-sm-0" pills vertical justified end>
                                <BTab title="Overview" active>

                                    <p class="mb-2">Welcome to your dashboard. Get an at-a-glance view of your recent
                                        activity, top stats, and personalized suggestions to enhance productivity and
                                        stay
                                        on track.</p>
                                    <ul>
                                        <li>View total project status</li>
                                        <li>Quick links to recent files</li>
                                        <li>Weekly performance charts</li>
                                    </ul>
                                    <p class="mb-0">Your dashboard is tailored to your activity and roles. Stay informed
                                        and
                                        always one step ahead.</p>
                                </BTab>
                                <BTab title="Profile">
                                    <p class="mb-2">Manage your personal details, change your profile photo, and update
                                        your
                                        contact information.</p>
                                    <ul>
                                        <li>Name, Email, Phone</li>
                                        <li>Change Password</li>
                                        <li>Activity logs and preferences</li>
                                    </ul>
                                    <p class="mb-0">Keeping your profile up to date ensures a better and more secure
                                        experience.</p>
                                </BTab>
                                <BTab title="Settings">
                                    <p class="mb-2">Customize your preferences, notification options, and privacy
                                        settings.
                                    </p>
                                    <ul>
                                        <li>Theme selection: Light / Dark mode</li>
                                        <li>Email &amp; push notification toggles</li>
                                        <li>Linked accounts and integrations</li>
                                    </ul>
                                    <p class="mb-0">Settings help personalize your interface and improve your workflow
                                        efficiency.</p>
                                </BTab>
                                <BTab title="Projects">
                                    <p class="mb-2">Track all your active, completed, and upcoming projects in one
                                        place.
                                    </p>
                                    <ul>
                                        <li>Kanban board and Gantt charts</li>
                                        <li>Task assignments and deadlines</li>
                                        <li>Progress indicators and timelines</li>
                                    </ul>
                                    <p class="mb-0">Use collaboration tools, upload documents, and manage deliverables
                                        directly from here.</p>
                                </BTab>
                                <BTab title="Support">
                                    <p class="mb-2">Need assistance? Access our help center or contact our support team
                                        directly.</p>
                                    <ul>
                                        <li>Browse FAQs and tutorials</li>
                                        <li>Submit a support ticket</li>
                                        <li>Live chat with support agents</li>
                                    </ul>
                                    <p class="mb-0">We’re here 24/7 to assist you with anything you need—technical or
                                        account-related.</p>
                                </BTab>
                            </BTabs>
                        </b-row>
                    </UICard>
                </BCol>


                <BCol xxl="6">
                    <UICard title="Tabs Bordered" isCollapsable>
                        <BTabs nav-class="nav-bordered nav-bordered-success mb-3">
                            <BTab title="Overview">
                                <p class="mb-0">
                                    This dashboard provides a quick overview of your recent activity, performance
                                    metrics,
                                    and system status. You can easily monitor key indicators, recent logins, pending
                                    tasks,
                                    and overall user engagement.
                                </p>
                            </BTab>
                            <BTab title="Activity" active>
                                <p class="mb-0">
                                    View your latest interactions and actions taken across the platform. This includes
                                    recent file uploads, comments, status updates, and notification history to keep you
                                    up
                                    to date with ongoing changes.
                                </p>
                            </BTab>
                            <BTab title="Settings">
                                <p class="mb-0">
                                    Customize your account preferences including theme options, notification settings,
                                    and
                                    privacy controls. Adjust layout configurations to suit your workflow and manage
                                    integration with third-party services.
                                </p>
                            </BTab>
                            <BTab title="About">
                                <p class="mb-0">Our company is dedicated to offering high-quality services and products
                                    designed to enrich your life. With a focus on sustainability and innovation, we aim
                                    to
                                    create lasting value for our customers. Join us on our journey to make everyday
                                    living
                                    better!
                                </p>
                            </BTab>
                        </BTabs>
                    </UICard>

                </BCol>

                <BCol xxl="6">

                    <UICard justify title="Bordered Tabs with Colored Border" isCollapsable>
                        <BTabs justified nav-class="nav-bordered nav-bordered-danger mb-3">
                            <BTab>
                                <template #title>
                                    <Icon icon="tabler:home" class="fs-lg me-md-1 align-middle" />
                                    <span class="d-none d-md-inline-block align-middle">Home</span>
                                </template>
                                <p class="mb-0">
                                    This dashboard provides a quick overview of your recent activity, performance
                                    metrics,
                                    and system status. You can easily monitor key indicators, recent logins, pending
                                    tasks,
                                    and overall user engagement.
                                </p>
                            </BTab>
                            <BTab active>
                                <template #title>
                                    <Icon icon="tabler:user-circle" class="fs-lg me-md-1 align-middle" />
                                    <span class="d-none d-md-inline-block align-middle">Profile</span>
                                </template>
                                <p class="mb-0">
                                    View your latest interactions and actions taken across the platform. This includes
                                    recent file uploads, comments, status updates, and notification history to keep you
                                    up
                                    to date with ongoing changes.
                                </p>
                            </BTab>
                            <BTab>
                                <template #title>
                                    <Icon icon="tabler:settings" class="fs-lg me-md-1 align-middle" />
                                    <span class="d-none d-md-inline-block align-middle">Settings</span>
                                </template>
                                <p class="mb-0">
                                    Customize your account preferences including theme options, notification settings,
                                    and
                                    privacy controls. Adjust layout configurations to suit your workflow and manage
                                    integration with third-party services.
                                </p>
                            </BTab>
                            <BTab>
                                <template #title>
                                    <Icon icon="tabler:info-circle" class="fs-lg me-md-1 align-middle" />
                                    <span class="d-none d-md-inline-block align-middle">Profile</span>
                                </template>
                                <p class="mb-0">Our company is dedicated to offering high-quality services and products
                                    designed to enrich your life. With a focus on sustainability and innovation, we aim
                                    to
                                    create lasting value for our customers. Join us on our journey to make everyday
                                    living
                                    better!
                                </p>
                            </BTab>
                        </BTabs>
                    </UICard>

                </BCol>

                <BCol xxl="6">
                    <UICard title="Icons Tab" isCollapsable>
                        <BTabs nav-class="nav-bordered nav-bordered-suceess mb-3">
                            <BTab title="Overview">
                                <template #title>
                                    <Icon icon="tabler:home" class="fs-22 align-middle" />
                                </template>
                                <p class="mb-0">
                                    This dashboard provides a quick overview of your recent activity, performance
                                    metrics,
                                    and system status. You can easily monitor key indicators, recent logins, pending
                                    tasks,
                                    and overall user engagement.
                                </p>
                            </BTab>
                            <BTab active>
                                <template #title>
                                    <Icon icon="tabler:user" class="fs-22 align-middle" />
                                </template>
                                <p class="mb-0">
                                    View your latest interactions and actions taken across the platform. This includes
                                    recent file uploads, comments, status updates, and notification history to keep you
                                    up
                                    to date with ongoing changes.
                                </p>
                            </BTab>
                            <BTab>
                                <template #title>
                                    <Icon icon="tabler:settings" class="fs-22 align-middle" />
                                </template>
                                <p class="mb-0">
                                    Customize your account preferences including theme options, notification settings,
                                    and
                                    privacy controls. Adjust layout configurations to suit your workflow and manage
                                    integration with third-party services.
                                </p>
                            </BTab>
                            <BTab>
                                <template #title>
                                    <Icon icon="tabler:info-circle" class="fs-22 align-middle" />
                                </template>
                                <p class="mb-0">Our company is dedicated to offering high-quality services and products
                                    designed to enrich your life. With a focus on sustainability and innovation, we aim
                                    to
                                    create lasting value for our customers. Join us on our journey to make everyday
                                    living
                                    better!
                                </p>
                            </BTab>
                            <BTab>
                                <template #title>
                                    <Icon icon="tabler:briefcase" class="fs-22 align-middle" />
                                </template>
                                <p class="mb-0">Our recent projects range from mobile app development to full-scale
                                    branding
                                    initiatives. We believe
                                    in data-driven strategies paired with creative storytelling to drive results.
                                </p>
                            </BTab>
                            <BTab>
                                <template #title>
                                    <Icon icon="tabler:mail" class="fs-22 align-middle" />
                                </template>
                                <p class="mb-0">
                                    Have questions or ideas? We'd love to hear from you! Reach out through our contact
                                    form,
                                    social media, or drop
                                    by our office for a chat over coffee.
                                </p>
                            </BTab>
                        </BTabs>
                    </UICard>
                </BCol>

                <BCol xxl="6">
                    <BCard no-body>
                        <BTabs title="Card with Tabs" card justified nav-class="card-header-tabs nav-bordered ms-auto">
                            <BTab title="Summary" active>
                                <p class="mb-0">
                                    Welcome to your financial dashboard. Here, you can monitor real-time updates on your
                                    income,
                                    expenses, savings, and investments. Our tools are designed to help you make informed
                                    decisions and
                                    achieve your financial goals faster.
                                </p>
                            </BTab>
                            <BTab title="Account">
                                <p class="mb-0">
                                    View and manage all your bank accounts, credit cards, and loan details in one place.
                                    Link your
                                    financial institutions securely and keep track of balances, transactions, and
                                    payment
                                    schedules with
                                    ease.
                                </p>
                            </BTab>
                            <BTab title="Settings">
                                <p class="mb-0">
                                    Customize your preferences including budgeting alerts, currency format, report
                                    frequency, and
                                    security settings. Enable multi-factor authentication and choose how you'd like to
                                    receive account
                                    activity notifications.
                                </p>
                            </BTab>
                        </BTabs>
                    </BCard>
                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardHeader, BCardTitle, BCol, BContainer, BRow, BTab, BTabs } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Tabs')
</script>

<style scoped></style>