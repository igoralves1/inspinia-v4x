<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Dropdowns" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Examples</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted">
                                Toggle contextual overlays for displaying lists of links and more with the Bootstrap
                                dropdown plugin.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/dropdown.html"
                                target="_blank">
                                Dropdowns on vue Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>

                    <UICard title="Single Button Dropdowns" isCollapsable>

                        <p class="text-muted">
                            Any single <code>.btn</code> can be turned into a dropdown
                            toggle with some markup changes. Here’s how you can put them to work
                            with either <code>&lt;button&gt;</code>
                            elements:
                        </p>

                        <BRow>
                            <div class="col-auto">
                                <BDropdown variant="light" text="Choose Option">
                                    <BDropdownItem>Profile Settings</BDropdownItem>
                                    <BDropdownItem>Notifications</BDropdownItem>
                                    <BDropdownItem>Logout</BDropdownItem>
                                </BDropdown>
                            </div>

                            <div class="col-auto">

                                <BDropdown variant="primary" text="Quick Actions">
                                    <BDropdownItem>Create New</BDropdownItem>
                                    <BDropdownItem>Upload File</BDropdownItem>
                                    <BDropdownItem>View Reports</BDropdownItem>
                                </BDropdown>
                            </div>
                        </BRow>
                    </UICard>


                    <UICard title="Menu Alignment" isCollapsable>
                        <p class="text-muted">
                            Add <code>.dropdown-menu-end</code>
                            to a <code>.dropdown-menu</code> to right
                            align the dropdown menu.
                        </p>

                        <BDropdown variant="light" text="Right-aligned menu">
                            <BDropdownItem>Action</BDropdownItem>
                            <BDropdownItem>Another action</BDropdownItem>
                            <BDropdownItem>Something else here</BDropdownItem>
                        </BDropdown>
                    </UICard>

                    <UICard title="Custom Dropdown Arrow" isCollapsable>
                        <p class="text-muted">
                            Any single <code>.btn</code> can be turned into a dropdown
                            toggle with some markup changes. Here’s how you can put them to work
                            with either <code>&lt;button&gt;</code> elements:
                        </p>

                        <BRow class="g-3">
                            <div class="col-auto">
                                <BDropdown variant="primary" toggle-class="drop-arrow-none" text="Without Arrow">
                                    <BDropdownItem href="#">Download Report</BDropdownItem>
                                    <BDropdownItem href="#">View Analytics</BDropdownItem>
                                    <BDropdownItem href="#">Export Data</BDropdownItem>
                                </BDropdown>
                            </div>

                            <div class="col-auto">
                                <BDropdown variant="outline-primary" toggle-class="drop-arrow-none">
                                    <template #button-content>
                                        Tabler Icon
                                        <Icon icon="tabler-chevron-down" class="align-middle ms-1" />
                                    </template>
                                    <BDropdownItem href="#">Edit Profile</BDropdownItem>
                                    <BDropdownItem href="#">Account Settings</BDropdownItem>
                                    <BDropdownItem href="#">Sign Out</BDropdownItem>
                                </BDropdown>
                            </div>

                            <div class="col-auto">
                                <BDropdown variant="primary" toggle-class="drop-arrow-none">
                                    <template #button-content>
                                        Lucide Icon
                                        <Icon icon="lucide:square-chevron-down" class="avatar-xxs ms-2" size="13" />
                                    </template>
                                    <BDropdownItem href="#">New Project</BDropdownItem>
                                    <BDropdownItem href="#">Manage Team</BDropdownItem>
                                    <BDropdownItem href="#">Billing Info</BDropdownItem>
                                </BDropdown>
                            </div>
                        </BRow>
                    </UICard>

                    <UICard title="Split Button Dropdowns" isCollapsable>

                        <p class="text-muted">
                            Similarly, create split button dropdowns with virtually the same markup as single
                            button dropdowns, but with the addition of
                            <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.
                        </p>

                        <div class="d-flex flex-wrap gap-2">
                            <BDropdown split text="Primary" variant="primary" class="drop-arrow-none">

                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown split text="Secondary" variant="light">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown split text="Success"  class="drop-arrow-none soft-success">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown split text="Info" variant="info">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown split text="Warning" variant="warning">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown split text="Danger" variant="danger">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                        </div>
                    </UICard>

                    <UICard title="Variant" isCollapsable>
                        <p class="text-muted">The best part is you can do this with any button variant, too:</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BDropdown text="Primary" variant="primary" class="btn-group">
                                <BDropdownItem href="#">Create New</BDropdownItem>
                                <BDropdownItem href="#">Save Changes</BDropdownItem>
                                <BDropdownItem href="#">Publish Now</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">View Drafts</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Secondary" variant="light" class="btn-group">
                                <BDropdownItem href="#">Settings</BDropdownItem>
                                <BDropdownItem href="#">Preferences</BDropdownItem>
                                <BDropdownItem href="#">Account Info</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Logout</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Success" variant="success" class="btn-group">
                                <BDropdownItem href="#">Mark as Complete</BDropdownItem>
                                <BDropdownItem href="#">Download Report</BDropdownItem>
                                <BDropdownItem href="#">Submit Review</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Archive Task</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Info" variant="info" class="btn-group">
                                <BDropdownItem href="#">View Logs</BDropdownItem>
                                <BDropdownItem href="#">System Info</BDropdownItem>
                                <BDropdownItem href="#">Help Center</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Contact Support</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Warning" variant="warning" class="btn-group">
                                <BDropdownItem href="#">Pending Approvals</BDropdownItem>
                                <BDropdownItem href="#">Overdue Tasks</BDropdownItem>
                                <BDropdownItem href="#">Subscription Expiring</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Renew Plan</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Danger" variant="danger" class="btn-group">
                                <BDropdownItem href="#">Delete Item</BDropdownItem>
                                <BDropdownItem href="#">Revoke Access</BDropdownItem>
                                <BDropdownItem href="#">Reset Password</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Permanently Remove</BDropdownItem>
                            </BDropdown>
                        </div>
                    </UICard>

                    <UICard title="Sizing" isCollapsable>
                        <p class="text-muted">Button dropdowns work with buttons of all sizes, including default
                            and split dropdown buttons.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BDropdown variant="light" size="lg" text="Large button" class="btn-group">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown variant="light" size="lg" split text="Large button" class="btn-group">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown variant="light" size="sm" text="Small button" class="btn-group">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown variant="light" size="sm" split text="Small button" class="btn-group">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                        </div>
                    </UICard>

                    <UICard title="Dropup Variation" isCollapsable>
                        <p class="text-muted">
                            Trigger dropdown menus above elements by adding
                            <code>dropup</code> to the parent element.
                        </p>

                        <div class="d-flex flex-wrap gap-2">
                            <BDropdown variant="light" text="Dropup" end placement="top" class="btn-group">
                                <BDropdownItem href="#">Upload File</BDropdownItem>
                                <BDropdownItem href="#">Sync Data</BDropdownItem>
                                <BDropdownItem href="#">Import from CSV</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Advanced Settings</BDropdownItem>
                            </BDropdown>

                            <BDropdown variant="light" text="Split dropup" placement="top" split class="btn-group">
                                <BDropdownItem href="#">New Task</BDropdownItem>
                                <BDropdownItem href="#">Assign User</BDropdownItem>
                                <BDropdownItem href="#">Set Deadline</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Project Settings</BDropdownItem>
                            </BDropdown>
                        </div>
                    </UICard>

                    <UICard title="Dropstart Variation" isCollapsable>
                        <p class="text-muted">
                            Trigger dropdown menus at the left of the elements by adding
                            <code>dropstart</code> to the parent element.
                        </p>

                        <div class="d-flex flex-wrap gap-2">
                            <BDropdown variant="secondary" text="Dropstart" placement="left" class="btn-group">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>

                            <BDropdown variant="secondary" text="Split dropstart" placement="left" split
                                class="btn-group">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                            </BDropdown>
                        </div>
                    </UICard>

                    <UICard title="Dropend Variation" isCollapsable>
                        <p class="text-muted">
                            Trigger dropdown menus at the right of the elements by adding
                            <code>dropend</code> to the parent element.
                        </p>

                        <div class="d-flex flex-wrap gap-2">
                            <BDropdown variant="primary" text="Dropend" placement="right" class="btn-group">
                                <BDropdownItem href="#">View Profile</BDropdownItem>
                                <BDropdownItem href="#">Message User</BDropdownItem>
                                <BDropdownItem href="#">Report Issue</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Block User</BDropdownItem>
                            </BDropdown>

                            <BDropdown variant="primary" text="Split Dropend" placement="right" split class="btn-group">
                                <BDropdownItem href="#">New Invoice</BDropdownItem>
                                <BDropdownItem href="#">Send Reminder</BDropdownItem>
                                <BDropdownItem href="#">Duplicate</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Delete Invoice</BDropdownItem>
                            </BDropdown>
                        </div>
                    </UICard>

                    <UICard title="Active Item" isCollapsable>
                        <p class="text-muted">Add <code>.active</code> to item in the dropdown to <strong>style
                                them as active</strong>.</p>


                        <BDropdown variant="secondary" text="Active Item" class="btn-group">
                            <BDropdownItem href="#">Regular link</BDropdownItem>
                            <BDropdownItem active href="#">Active link</BDropdownItem>
                            <BDropdownItem href="#">Another link</BDropdownItem>
                        </BDropdown>
                    </UICard>

                    <UICard title="Disabled Item" isCollapsable>
                        <p class="text-muted">Add <code>.disabled</code> to items in the dropdown to
                            <strong>style them as disabled</strong>.
                        </p>


                        <BDropdown variant="secondary" text="Disable Item" class="btn-group">
                            <BDropdownItem href="#">Regular link</BDropdownItem>
                            <BDropdownItem disabled href="#">Disable link</BDropdownItem>
                            <BDropdownItem href="#">Another link</BDropdownItem>
                        </BDropdown>
                    </UICard>

                    <UICard title="Headers" isCollapsable>
                        <p class="text-muted">Add a header to label sections of actions in any dropdown menu.
                        </p>

                        <BDropdown variant="secondary" text="Header" class="btn-group">
                            <BDropdownHeader tag="h5">Dropdown header</BDropdownHeader>
                            <BDropdownItem href="#">Action</BDropdownItem>
                            <BDropdownItem href="#">Another action</BDropdownItem>
                        </BDropdown>
                    </UICard>

                    <UICard title="Dark Dropdowns" isCollapsable>
                        <p class="text-muted">Opt into darker dropdowns to match a dark navbar or custom style
                            by adding <code>.dropdown-menu-dark</code> onto an existing
                            <code>.dropdown-menu</code>. No changes are required to the dropdown items.
                        </p>

                        <BDropdown variant="dark" text="Header" class="btn-group">
                            <BDropdownItem href="#" active>Dashboard</BDropdownItem>
                            <BDropdownItem href="#">My Orders</BDropdownItem>
                            <BDropdownItem href="#">Billing Settings</BDropdownItem>
                            <BDropdownDivider />
                            <BDropdownItem href="#">Logout</BDropdownItem>
                        </BDropdown>
                    </UICard>

                    <UICard title="Centered Dropdowns" isCollapsable>
                        <p class="text-muted">
                            Make the dropdown menu centered below the toggle with
                            <code>.dropdown-center</code> on the parent element.
                        </p>

                        <div class="hstack gap-2">
                            <BDropdown text="Centered dropdown" variant="secondary" menu-class="dropdown-center">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Action two</BDropdownItem>
                                <BDropdownItem>Action three</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Centered dropup" variant="secondary" placement="top-center">
                                <BDropdownItem>Action</BDropdownItem>
                                <BDropdownItem>Action two</BDropdownItem>
                                <BDropdownItem>Action three</BDropdownItem>
                            </BDropdown>
                        </div>
                    </UICard>

                    <UICard title="Dropdown Options" isCollapsable>
                        <p class="text-muted">Use <code>data-bs-offset</code> or <code>data-bs-reference</code>
                            to change the location of the dropdown.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BDropdown variant="secondary" text="Offset"
                                :offset="{ alignmentAxis: 10, crossAxis: 10, mainAxis: 20 }">
                                <li>
                                    <BDropdownItem href="#">Profile Settings</BDropdownItem>
                                </li>
                                <li>
                                    <BDropdownItem href="#">Privacy Settings</BDropdownItem>
                                </li>
                                <li>
                                    <BDropdownItem href="#">Notification Preferences</BDropdownItem>
                                </li>
                            </BDropdown>

                        </div>


                    </UICard>

                    <UICard title="Auto Close Behavior" isCollapsable>
                        <p class="text-muted">By default, the dropdown menu is closed when clicking inside or
                            outside the dropdown menu. You can use the <code>autoClose</code> option to change
                            this behavior of the dropdown.</p>

                        <div class="hstack gap-2">
                            <BDropdown text="Default dropdown" variant="secondary" :lazy="true">
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Clickable inside" variant="secondary" auto-close="inside">
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Clickable outside" variant="secondary" auto-close="outside">
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                            </BDropdown>

                            <BDropdown text="Manual close" variant="secondary" :auto-close="false">
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                                <BDropdownItem href="#">Menu item</BDropdownItem>
                            </BDropdown>
                        </div>
                    </UICard>

                    <UICard title="Text" isCollapsable>
                        <p class="text-muted">Place any freeform text within a dropdown menu with text and use
                            spacing utilities. Note that you’ll likely need additional sizing styles to
                            constrain the menu width.</p>

                        <BDropdown variant="primary" text="Text Dropdown" class="d-inline-block"
                            menu-class="p-3 text-muted">
                            <p>
                                Some example text that's free-flowing within the dropdown menu.
                            </p>
                            <p class="mb-0">
                                And this is more example text.
                            </p>
                        </BDropdown>
                    </UICard>

                    <UICard title="Forms" isCollapsable>
                        <p class="text-muted">Put a form within a dropdown menu, or make it into a dropdown
                            menu, and use margin or padding utilities to give it the negative space you require.
                        </p>
                        <BDropdown variant="secondary" text="Form" class="d-inline-block" menu-class="p-3">
                            <form class="px-2 py-2" @submit.prevent>
                                <div class="mb-3">
                                    <label for="dropdownEmail" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="dropdownEmail"
                                        placeholder="email@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="dropdownPassword" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="dropdownPassword"
                                        placeholder="Password" />
                                </div>
                                <div class="mb-2">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                                        <label class="form-check-label" for="dropdownCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </form>

                            <hr class="dropdown-divider" />
                            <BDropdownItem href="#">New around here? Sign up</BDropdownItem>
                            <BDropdownItem href="#">Forgot password?</BDropdownItem>
                        </BDropdown>
                    </UICard>
                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BDropdown, BDropdownDivider, BDropdownHeader, BDropdownItem, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

usePageMeta('Dropdowns')
</script>

<style scoped></style>