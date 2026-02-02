<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Buttons" subTitle="UI" />
        </BContainer>


        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Examples</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with
                                support
                                for multiple sizes, states, and more.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/button.html"
                                target="_blank">
                                Buttons on vue Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Default Buttons" isCollapsable>
                        <p class="text-muted">Use any of the available <code>&lt;a&gt;</code>,
                            <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> classes <code>.btn</code> to
                            quickly create a styled button.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary">Primary</BButton>
                            <BButton variant="secondary">Secondary</BButton>
                            <BButton variant="success">Success</BButton>
                            <BButton variant="info">Info</BButton>
                            <BButton variant="warning">Warning</BButton>
                            <BButton variant="danger">Danger</BButton>
                            <BButton variant="dark">Dark</BButton>
                            <BButton :variant="null" class="btn-purple">Purple</BButton>
                            <BButton variant="light">Light</BButton>
                            <BButton variant="link">Link</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Button Rounded" isCollapsable>
                        <p class="text-muted">Use <code>.rounded-pill</code> with a default button to give it
                            pill-shaped rounded corners.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary" pill>Primary</BButton>
                            <BButton variant="secondary" pill>Secondary</BButton>
                            <BButton variant="success" pill>Success</BButton>
                            <BButton variant="info" pill>Info</BButton>
                            <BButton variant="warning" pill>Warning</BButton>
                            <BButton variant="danger" pill>Danger</BButton>
                            <BButton variant="dark" pill>Dark</BButton>
                            <BButton :variant="null" pill class="btn-purple">Purple</BButton>
                            <BButton variant="light" pill>Light</BButton>
                            <BButton variant="link" pill>Link</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Button Outline" isCollapsable>
                        <p class="text-muted">Use the <code>.btn-outline-**</code> classes to quickly create buttons
                            with borders.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="outline-primary">Primary</BButton>
                            <BButton variant="outline-secondary">Secondary</BButton>
                            <BButton variant="outline-success">Success</BButton>
                            <BButton variant="outline-info">Info</BButton>
                            <BButton variant="outline-warning">Warning</BButton>
                            <BButton :variant="null" class="btn-outline-purple">Purple</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Button Outline Rounded" isCollapsable>
                        <p class="text-muted">Use <code>.rounded-pill</code> with an outline button to give it
                            pill-shaped rounded corners.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="outline-primary" pill>Primary</BButton>
                            <BButton variant="outline-secondary" pill>Secondary</BButton>
                            <BButton variant="outline-success" pill>Success</BButton>
                            <BButton variant="outline-warning" pill>Warning</BButton>
                            <BButton variant="outline-danger" pill>Warning</BButton>
                            <BButton variant="outline-info" pill>Info</BButton>
                            <BButton :variant="null" class="btn btn-purple" pill>Purtple</BButton>
                            <BButton variant="outline-light" pill>Light</BButton>
                            <BButton variant="outline-dark" pill>Dark</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Soft Buttons" isCollapsable>
                        <p class="text-muted">Use <code>btn-soft-**</code> class with the below-mentioned variation to
                            create a button with the soft background.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton :variant="null" class="btn-soft-primary">Primary</BButton>
                            <BButton :variant="null" class="btn-soft-secondary">Secondary</BButton>
                            <BButton :variant="null" class="btn-soft-success">Success</BButton>
                            <BButton :variant="null" class="btn-soft-danger">Danger</BButton>
                            <BButton :variant="null" class="btn-soft-warning">Warning</BButton>
                            <BButton :variant="null" class="btn-soft-info">Info</BButton>
                            <BButton :variant="null" class="btn-soft-purple">Purple</BButton>
                            <BButton :variant="null" class="btn-soft-dark">Dark</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Soft Rounded Buttons" isCollapsable>
                        <p class="text-muted">Use <code>btn-soft-**</code> class with the below-mentioned variation to
                            create a button with the soft background.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <BButton :variant="null" pill class="btn-soft-primary">Primary</BButton>
                            <BButton :variant="null" pill class="btn-soft-secondary">Secondary</BButton>
                            <BButton :variant="null" pill class="btn-soft-success">Success</BButton>
                            <BButton :variant="null" pill class="btn-soft-danger">Danger</BButton>
                            <BButton :variant="null" pill class="btn-soft-warning">Warning</BButton>
                            <BButton :variant="null" pill class="btn-soft-info">Info</BButton>
                            <BButton :variant="null" pill class="btn-soft-purple">Purple</BButton>
                            <BButton :variant="null" pill class="btn-soft-dark">Dark</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Ghost Buttons" isCollapsable>
                        <p class="text-muted">Use the <code>btn-ghost-**</code> class to create buttons with a
                            transparent background that highlight with color on hover.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton type="button" :variant="null" class="btn-ghost-primary">Primary</BButton>
                            <BButton type="button" class="btn-ghost-secondary">Secondary</BButton>
                            <BButton type="button" class="btn-ghost-success">Success</BButton>
                            <BButton type="button" class="btn-ghost-danger">Danger</BButton>
                            <BButton type="button" class="btn-ghost-warning">Warning</BButton>
                            <BButton type="button" class="btn-ghost-info">Info</BButton>
                            <BButton type="button" class="btn-ghost-purple">Purple</BButton>
                            <BButton type="button" class="btn-ghost-dark">Dark</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Ghost Rounded Buttons" isCollapsable>
                        <p class="text-muted">Combine <code>btn-ghost-**</code> with <code>.rounded-pill</code> to
                            create ghost-style buttons with rounded corners that highlight on hover.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton type="button" :variant="null" pill class="btn-ghost-primary">Primary</BButton>
                            <BButton type="button" pill class="btn-ghost-secondary">Secondary</BButton>
                            <BButton type="button" pill class="btn-ghost-success">Success</BButton>
                            <BButton type="button" pill class="btn-ghost-danger">Danger</BButton>
                            <BButton type="button" pill class="btn-ghost-warning">Warning</BButton>
                            <BButton type="button" pill class="btn-ghost-info">Info</BButton>
                            <BButton type="button" pill class="btn-ghost-purple">Purple</BButton>
                            <BButton type="button" pill class="btn-ghost-dark">Dark</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Button Sizes" isCollapsable>
                        <p class="text-muted">Want larger or smaller buttons? Use <code>.btn-lg</code> or
                            <code>.btn-sm</code> to adjust the button size.
                        </p>

                        <div class="d-flex flex-wrap align-items-center gap-2">
                            <BButton variant="primary" size="lg">Large</BButton>
                            <BButton variant="info">Normal</BButton>
                            <BButton class="btn-purple" size="sm">Small</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Disabled Buttons" isCollapsable>
                        <p class="text-muted">Use the <code>disabled</code> attribute on a <code>&lt;button&gt;</code>
                            to make it inactive and non-interactive.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="info" disabled>Info</BButton>
                            <BButton class="btn-purple" disabled>Purple</BButton>
                            <BButton variant="danger" disabled>Danger</BButton>
                            <BButton variant="dark" disabled>Dark</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Block Button" isCollapsable>
                        <p class="text-muted font-14">To create block-level buttons, add the <code>.d-grid</code> class
                            to the parent <code>&lt;div&gt;</code>.</p>

                        <div class="d-grid gap-2">
                            <BButton variant="primary" size="sm">Block Button</BButton>
                            <BButton variant="success" size="lg">Block Button</BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Toggle Button" isCollapsable>
                        <p class="text-muted">Add <code>data-bs-toggle="button"</code> to toggle a button’s
                            <code>active</code> state. For pre-toggled buttons, also add <code>.active</code> and
                            <code>aria-pressed="true"</code>.
                        </p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary" type="button" v-model:pressed="buttonToggle">Toggle button
                            </BButton>
                            <button type="button" class="btn btn-primary active">Active toggle button</button>
                            <button type="button" class="btn btn-primary" disabled>Disabled
                                toggle button</button>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Button Tags" isCollapsable>
                        <p class="text-muted">Use <code>.btn</code> classes with <code>&lt;button&gt;</code>,
                            <code>&lt;a&gt;</code>, or <code>&lt;input&gt;</code> elements, though rendering may vary
                            slightly across browsers.
                        </p>

                        <div class="d-flex flex-wrap gap-2">
                            <a class="btn btn-primary" href="#" role="button">Link</a>
                            <BButton vrainat="primary" type="submit">Button</BButton>
                            <input class="btn btn-primary" type="button" value="Input">
                            <input class="btn btn-primary" type="submit" value="Submit">
                            <input class="btn btn-primary" type="reset" value="Reset">
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Focus Ring Utilities" isCollapsable>
                        <p class="text-muted">Click directly on the link below to see the focus ring in action, or into
                            the example below and then press <kbd>Tab</kbd>.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">
                                Primary
                                focus</RouterLink>
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">
                                Secondary
                                focus</RouterLink>
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">
                                Success
                                focus</RouterLink>
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">
                                Danger
                                focus</RouterLink>
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">
                                Warning
                                focus</RouterLink>
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">
                                Info
                                focus</RouterLink>
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-purple py-1 px-2 text-decoration-none border rounded-2">
                                Purple
                                focus</RouterLink>
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">
                                Light
                                focus</RouterLink>
                            <RouterLink to="#"
                                class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">
                                Dark
                                focus</RouterLink>
                        </div>

                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Icon Buttons" isCollapsable>
                        <p class="text-muted">Icon only button. Use it when you want a button with just an icon and no
                            text, ideal for compact UI elements or toolbars.</p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="primary" type="button" class="btn-icon">
                                <Icon icon="tabler:star" class="fs-lg" />
                            </BButton>
                            <BButton :variant="null" type="button" class="btn btn-purple btn-icon">
                                <Icon icon="lucide:leaf" class="avatar-xxs" />
                            </BButton>
                            <BButton variant="warning" type="button" class="btn-icon">
                                <Icon icon="tabler:settings" class="fs-xl" />
                            </BButton>
                            <BButton   type="button" class="rounded-circle btn-icon btn-ssoft-info">
                                <Icon icon="tabler:bell" class="fs-xxl" />
                            </BButton>
                            <BButton variant="secondary" type="button" class="rounded-circle btn-icon">
                                <Icon icon="tabler:rocket" class="fs-xxl" />
                            </BButton>
                            <BButton :variant="null" type="button" class="btn btn-outline-dark rounded-circle btn-icon">
                                <Icon icon="tabler:plane" class="fs-xl" />
                            </BButton>
                            <BButton  type="button" class="btn-icon btn-soft-secondary">
                                <Icon icon="tabler:microphone" class="fs-xl" />
                            </BButton>

                            <BButton variant="light" type="button">
                                <Icon icon="tabler:hand-stop" class="align-middle me-1 fs-xl" />/Stop
                            </BButton>
                            <BButton variant="dark">
                                <Icon icon="lucide:zap" class="avatar-xxs me-1" /> Boost
                            </BButton>

                            <BButton :variant="null" type="button" class="btn btn-outline-info">
                                <Icon icon="tabler:credit-card" class="align-middle me-1 fs-xl" />Payment
                            </BButton>
                            <BButton :variant="null" type="button" class="btn btn-outline-warning">
                                <Icon icon="tabler:brand-stripe" class="align-middle me-1 fs-xl" />Stripe
                            </BButton>
                            <BButton variant="danger" type="button">
                                <Icon icon="tabler:tools" class="fs-xl me-1" /> <span>Tools</span>
                            </BButton>
                        </div>

                        <div class="d-flex flex-wrap gap-2 mt-3">
                            <BButton :variant="null" size="sm" class="btn-outline-secondary btn-icon" type="button">
                                <Icon icon="tabler:user" />
                            </BButton>
                            <BButton variant="primary" size="sm" class="btn-icon" type="button">
                                <Icon icon="tabler:message-circle" />
                            </BButton>
                            <BButton variant="success" size="sm" class="btn-icon rounded-circle" type="button">
                                <Icon icon="tabler:share" />
                            </BButton>
                            <BButton variant="info" class="btn-icon rounded-circle" type="button">
                                <Icon icon="tabler:bell" />
                            </BButton>
                            <BButton variant="warning" class="btn-icon" type="button">
                                <Icon icon="tabler:alert-triangle" />
                            </BButton>
                            <BButton :variant="null" class="btn-outline-danger btn-icon" type="button">
                                <Icon icon="tabler:trash" />
                            </BButton>
                            <BButton :variant="null" class="btn-outline-purple btn-icon rounded-circle" type="button">
                                <Icon icon="tabler:star" />
                            </BButton>


                            <BButton :variant="null" class="btn-outline-secondary btn-icon btn-lg" type="button">
                                <Icon icon="tabler:user" />
                            </BButton>
                            <BButton variant="primary" class="btn-icon btn-lg rounded-circle" type="button">
                                <Icon icon="tabler:message-circle" />
                            </BButton>
                            <BButton variant="success" class="btn-icon btn-lg rounded-circle" type="button">
                                <Icon icon="tabler:share" />
                            </BButton>
                            <BButton variant="info" class="btn-icon btn-lg" type="button">
                                <Icon icon="tabler:bell" />
                            </BButton>
                            <BButton variant="warning" class="btn-icon btn-lg" type="button">
                                <Icon icon="tabler:triangle" />
                            </BButton>
                            <BButton variant="danger" class="btn-icon btn-lg" type="button">
                                <Icon icon="tabler:trash" />
                            </BButton>
                            <BButton :variant="null" size="lg" class="btn-outline-danger btn-icon" type="button">
                                <Icon icon="tabler:star" />
                            </BButton>
                        </div>

                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Button Group" id="group" isCollapsable>
                        <p class="text-muted">Group multiple buttons together by wrapping them with the
                            <code>.btn</code> class inside a <code>.btn-group</code> container. This helps align buttons
                            side by side with consistent spacing and styling.
                        </p>
                        <BButtonGroup class="mb-2">
                            <BButton variant="light">Left</BButton>
                            <BButton variant="light">Middle</BButton>
                            <BButton variant="light">Right</BButton>
                        </BButtonGroup>
                        <br />
                        <BButtonGroup class="mb-2 me-1">
                            <BButton variant="light">1</BButton>
                            <BButton variant="light">2</BButton>
                            <BButton variant="light">3</BButton>
                        </BButtonGroup>
                        <BButtonGroup class="mb-2 me-1">
                            <BButton variant="light">4</BButton>
                            <BButton variant="light">5</BButton>
                            <BButton variant="light">6</BButton>
                            <BButton variant="light">7</BButton>
                        </BButtonGroup>
                        <BButtonGroup class="mb-2 ">

                            <BButton variant="light">8</BButton>
                        </BButtonGroup>
                        <br />
                        <BButtonGroup class="mb-2">
                            <BButton variant="light">1</BButton>
                            <BButton variant="primary">2</BButton>
                            <BButton variant="light">3</BButton>
                            <BDropdown text="Dropdown" variant="light" menu-class="dropdown-menu-end">
                                <BDropdownItem>Dropdown link</BDropdownItem>
                                <BDropdownItem>Dropdown link</BDropdownItem>
                            </BDropdown>
                        </BButtonGroup>

                        <BRow>
                            <BCol md="3">
                                <BButtonGroup vertical>
                                    <BButton variant="light">Top</BButton>
                                    <BButton variant="light">Middle</BButton>
                                    <BButton variant="light">Bottom</BButton>
                                </BButtonGroup>
                            </BCol>
                            <BCol md="3">
                                <BButtonGroup vertical>
                                    <BButton variant="light">Button 1</BButton>
                                    <BButton variant="light">Button 2</BButton>
                                    <BDropdown text="Button 3" variant="light" menu-class="dropdown-menu-end">
                                        <BDropdownItem>Dropdown link</BDropdownItem>
                                        <BDropdownItem>Dropdown link</BDropdownItem>
                                    </BDropdown>
                                </BButtonGroup>
                            </BCol>
                        </BRow>
                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BButton, BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const buttonToggle = ref(false)

usePageMeta('Buttons')
</script>

<style scoped></style>