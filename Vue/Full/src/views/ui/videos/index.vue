<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Videos" subTitle="UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <UICard title="Embed Videos">
                        <p class="text-muted mb-2">
                            Use generated pseudo elements to make an element maintain the aspect ratio of your choosing.
                            Perfect for responsively handling video or slideshow embeds based on the width of the
                            parent.
                        </p>

                        <a class="btn btn-link p-0 fw-semibold" href="https://getbootstrap.com/docs/5.3/helpers/ratio/"
                            target="_blank">
                            Ratios on Bootstrap
                            <Icon icon="tabler:chevron-right" class="ms-1" />
                        </a>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Responsive embed video 21:9" isCollapsable>
                        <div class="ratio ratio-21x9">
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                    </UICard>

                    <UICard title="Responsive embed video 1:1" isCollapsable>
                        <div class="ratio ratio-1x1">
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="6">
                    <UICard title="Responsive embed video 16:9" isCollapsable>
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                    </UICard>

                    <UICard title="Responsive embed video 4:3" isCollapsable>
                        <div class="ratio ratio-4x3">
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>


<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

</script>