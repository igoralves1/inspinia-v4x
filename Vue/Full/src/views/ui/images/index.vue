<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Images" subtitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Images & Avatars</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-0">
                                Here are custom examples of images and avatars for your reference.
                            </p>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Images Shapes" isCollapsable>
                        <p class="text-muted">
                            Avatars with different sizes and shapes.
                        </p>

                        <BRow>
                            <BCol sm="2" class="text-center">

                                <img :src="imgSmall1" alt="image" class="img-fluid" />
                                <p class="mb-0 mt-2">
                                    <code>.img-fluid</code>
                                </p>
                            </BCol>

                            <BCol sm="2" class="text-center">

                                <img :src="imgSmall2" alt="image" class="img-fluid rounded" />
                                <p class="mb-0 mt-2">
                                    <code>.rounded</code>
                                </p>
                            </BCol>

                            <BCol sm="2" class="text-center">

                                <img :src="user2" alt="image" class="img-fluid rounded" width="120" />
                                <p class="mb-0 mt-2">
                                    <code>.rounded</code>
                                </p>
                            </BCol>

                            <BCol sm="2" class="text-center">

                                <img :src="user7" alt="image" class="img-fluid rounded-circle"
                                    width="120" />
                                <p class="mb-0 mt-2">
                                    <code>.rounded-circle</code>
                                </p>
                            </BCol>

                            <BCol sm="2" class="text-center">

                                <img :src="imgSmall5" alt="image" class="img-fluid img-thumbnail" />
                                <p class="mb-0 mt-2">
                                    <code>.img-thumbnail</code>
                                </p>
                            </BCol>

                            <BCol sm="2" class="text-center">

                                <img :src="user8" alt="image"
                                    class="img-fluid rounded-circle img-thumbnail" width="120" />
                                <p class="mb-0 mt-2">
                                    <code>.rounded-circle .img-thumbnail</code>
                                </p>
                            </BCol>
                        </BRow>
                    </UICard>
                </BCol>

                <BCol xxl="6">
                    <UICard title="Avatar Sizes" isCollapsable>
                        <BRow class="text-center">
                            <BCol>

                                <img :src="user2" alt="image" class="img-fluid avatar-xs rounded" />
                                <p class="mt-2">
                                    <code>.avatar-xs</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-xs mx-auto">
                                    <span class="avatar-title text-bg-primary rounded">
                                        xs
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-xs</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-xs mx-auto">
                                    <span class="avatar-title bg-primary-subtle text-primary rounded">
                                        xs
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-xs</code>
                                </p>
                            </BCol>
                        </BRow>

                        <BRow class="text-center mt-3">
                            <BCol>

                                <img :src="user3" alt="image" class="img-fluid avatar-sm rounded" />
                                <p class="mt-2">
                                    <code>.avatar-sm</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-sm mx-auto">
                                    <span class="avatar-title text-bg-primary rounded">
                                        sm
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-sm</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-sm mx-auto">
                                    <span class="avatar-title bg-primary-subtle text-primary rounded">
                                        sm
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-sm</code>
                                </p>
                            </BCol>
                        </BRow>

                        <BRow class="text-center mt-3">
                            <BCol>

                                <img :src="user4" alt="image" class="img-fluid avatar-md rounded" />
                                <p class="mt-2">
                                    <code>.avatar-md</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-md mx-auto">
                                    <span class="avatar-title text-bg-primary rounded">
                                        md
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-md</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-md mx-auto">
                                    <span class="avatar-title bg-primary-subtle text-primary rounded">
                                        md
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-md</code>
                                </p>
                            </BCol>
                        </BRow>

                        <BRow class="text-center mt-3">
                            <BCol>

                                <img :src="user5" alt="image" class="img-fluid avatar-lg rounded" />
                                <p class="mt-2">
                                    <code>.avatar-lg</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-lg mx-auto">
                                    <span class="avatar-title text-bg-primary rounded">
                                        LG
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-lg</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-lg mx-auto">
                                    <span class="avatar-title bg-primary-subtle text-primary rounded">
                                        LG
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-lg</code>
                                </p>
                            </BCol>
                        </BRow>

                        <BRow class="text-center mt-3">
                            <BCol>

                                <img :src="user6" alt="image" class="img-fluid avatar-xl rounded" />
                                <p class="mt-2">
                                    <code>.avatar-xl</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-xl mx-auto">
                                    <span class="avatar-title text-bg-primary rounded">
                                        XL
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-xl</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-xl mx-auto">
                                    <span class="avatar-title bg-primary-subtle text-primary rounded">
                                        XL
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-xl</code>
                                </p>
                            </BCol>
                        </BRow>
                    </UICard>
                </BCol>

                <BCol xxl="6">
                    <UICard title="Avatar Sizes with Rounded" isCollapsable>
                        <BRow class="text-center">
                            <BCol>

                                <img :src="user7" alt="image"
                                    class="img-fluid avatar-xs rounded-circle" />
                                <p class="mt-2">
                                    <code>.avatar-xs</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-xs mx-auto">
                                    <span class="avatar-title text-bg-info rounded-circle">
                                        xs
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-xs</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-xs mx-auto">
                                    <span class="avatar-title bg-info-subtle text-info rounded-circle">
                                        xs
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-xs</code>
                                </p>
                            </BCol>
                        </BRow>

                        <BRow class="text-center mt-3">
                            <BCol>

                                <img :src="user8" alt="image"
                                    class="img-fluid avatar-sm rounded-circle" />
                                <p class="mt-2">
                                    <code>.avatar-sm</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-sm mx-auto">
                                    <span class="avatar-title text-bg-info rounded-circle">
                                        sm
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-sm</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-sm mx-auto">
                                    <span class="avatar-title bg-info-subtle text-info rounded-circle">
                                        sm
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-sm</code>
                                </p>
                            </BCol>
                        </BRow>

                        <BRow class="text-center mt-3">
                            <BCol>

                                <img :src="user9" alt="image"
                                    class="img-fluid avatar-md rounded-circle" />
                                <p class="mt-2">
                                    <code>.avatar-md</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-md mx-auto">
                                    <span class="avatar-title text-bg-info rounded-circle">
                                        md
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-md</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-md mx-auto">
                                    <span class="avatar-title bg-info-subtle text-info rounded-circle">
                                        md
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-md</code>
                                </p>
                            </BCol>
                        </BRow>

                        <BRow class="text-center mt-3">
                            <BCol>

                                <img :src="user10" alt="image"
                                    class="img-fluid avatar-lg rounded-circle" />
                                <p class="mt-2">
                                    <code>.avatar-lg</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-lg mx-auto">
                                    <span class="avatar-title text-bg-info rounded-circle">
                                        LG
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-lg</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-lg mx-auto">
                                    <span class="avatar-title bg-info-subtle text-info rounded-circle">
                                        LG
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-lg</code>
                                </p>
                            </BCol>
                        </BRow>

                        <BRow class="text-center mt-3">
                            <BCol>

                                <img :src="user1" alt="image"
                                    class="img-fluid avatar-xl rounded-circle" />
                                <p class="mt-2">
                                    <code>.avatar-xl</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-xl mx-auto">
                                    <span class="avatar-title text-bg-info rounded-circle">
                                        XL
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-xl</code>
                                </p>
                            </BCol>
                            <BCol>

                                <div class="avatar-xl mx-auto">
                                    <span class="avatar-title bg-info-subtle text-info rounded-circle">
                                        XL
                                    </span>
                                </div>
                                <p class="mt-2">
                                    <code>.avatar-xl</code>
                                </p>
                            </BCol>
                        </BRow>
                    </UICard>
                </BCol>

                <BCol xxl="12">
                    <UICard title="Avatar Groups" isCollapsable>
                        <BRow>
                            <BCol xl="3">

                                <div class="avatar-group">
                                    <div class="avatar">
                                        <img :src="user4" alt="" class="rounded-circle avatar-sm" />
                                    </div>
                                    <div class="avatar">
                                        <img :src="user5" alt="" class="rounded-circle avatar-sm" />
                                    </div>
                                    <div class="avatar">
                                        <img :src="user3" alt="" class="rounded-circle avatar-sm" />
                                    </div>
                                    <div class="avatar">
                                        <img :src="user8" alt="" class="rounded-circle avatar-sm" />
                                    </div>
                                    <div class="avatar">
                                        <img :src="user2" alt="" class="rounded-circle avatar-sm" />
                                    </div>
                                </div>
                            </BCol>
                            <BCol xl="3">

                                <div class="avatar-group">
                                    <div class="avatar avatar-md">
                                        <span class="avatar-title text-bg-purple rounded-circle fw-bold">
                                            D
                                        </span>
                                    </div>
                                    <div class="avatar avatar-md">
                                        <span class="avatar-title text-bg-primary rounded-circle fw-bold">
                                            K
                                        </span>
                                    </div>
                                    <div class="avatar avatar-md">
                                        <span class="avatar-title text-bg-secondary rounded-circle fw-bold">
                                            H
                                        </span>
                                    </div>
                                    <div class="avatar avatar-md">
                                        <span class="avatar-title text-bg-warning rounded-circle fw-bold">
                                            L
                                        </span>
                                    </div>
                                    <div class="avatar avatar-md">
                                        <span class="avatar-title text-bg-info rounded-circle fw-bold">
                                            G
                                        </span>
                                    </div>
                                </div>
                            </BCol>
                            <BCol xl="3">

                                <div class="avatar-group">
                                    <div class="avatar avatar-lg">
                                        <span
                                            class="avatar-title bg-purple-subtle text-purple rounded-circle fw-bold shadow">
                                            D
                                        </span>
                                    </div>
                                    <div class="avatar avatar-lg">
                                        <span
                                            class="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold shadow">
                                            K
                                        </span>
                                    </div>
                                    <div class="avatar avatar-lg">
                                        <span
                                            class="avatar-title bg-secondary-subtle text-secondary rounded-circle fw-bold shadow">
                                            H
                                        </span>
                                    </div>
                                    <div class="avatar avatar-lg">
                                        <span
                                            class="avatar-title bg-warning-subtle text-warning rounded-circle fw-bold shadow">
                                            L
                                        </span>
                                    </div>
                                    <div class="avatar avatar-lg">
                                        <span
                                            class="avatar-title bg-info-subtle text-info rounded-circle fw-bold shadow">
                                            G
                                        </span>
                                    </div>
                                </div>
                            </BCol>
                            <BCol xl="3">

                                <div class="avatar-group">
                                    <div class="avatar">
                                        <img :src="user10" alt="" class="rounded-circle avatar-xl" />
                                    </div>
                                    <div class="avatar avatar-xl">
                                        <span class="avatar-title text-bg-info rounded-circle fs-xl fw-bold">
                                            D
                                        </span>
                                    </div>
                                    <div class="avatar">
                                        <img :src="user7" alt="" class="rounded-circle avatar-xl" />
                                    </div>
                                    <div class="avatar">
                                        <img :src="user1" alt="" class="rounded-circle avatar-xl" />
                                    </div>
                                    <div class="avatar avatar-xl">
                                        <span class="avatar-title fs-xl text-bg-danger rounded-circle fw-bold">
                                            9+
                                        </span>
                                    </div>
                                </div>
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
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

import imgSmall1 from '@/assets/images/stock/small-1.jpg';
import imgSmall2 from '@/assets/images/stock/small-2.jpg';
import imgSmall5 from '@/assets/images/stock/small-5.jpg';
import user1 from '@/assets/images/users/user-1.jpg';
import user2 from '@/assets/images/users/user-2.jpg';
import user3 from '@/assets/images/users/user-3.jpg';
import user4 from '@/assets/images/users/user-4.jpg';
import user5 from '@/assets/images/users/user-5.jpg';
import user6 from '@/assets/images/users/user-6.jpg';
import user7 from '@/assets/images/users/user-7.jpg';
import user8 from '@/assets/images/users/user-8.jpg';
import user9 from '@/assets/images/users/user-9.jpg';
import user10 from '@/assets/images/users/user-10.jpg';

usePageMeta('Images')
</script>

<style scoped></style>