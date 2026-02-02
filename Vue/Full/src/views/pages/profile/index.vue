<template>
    <MainLayout>
        <BContainer fluid>
            <BRow>
                <BCol cols='12'>
                    <ProfileCover />
                </BCol>
            </BRow>

            <BRow>
                <BCol xl="4">
                    <PersonalInformation />

                    <Skills />

                    <SocialFeed />  
                </BCol>

                <BCol xl='8'>
                    <StatCards />

                    <About />

                    <Tasks />

                    <h4 class="my-4">My Blog Posts</h4>

                    <BRow>
                        <BCol v-for="(blog, idx) in blogs" :key='idx' xl="4" md="6">
                            <BlogCard :blog='blog' />
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import ProfileCover from './components/ProfileCover.vue';
import PersonalInformation from './components/PersonalInformation.vue';
import Skills from './components/Skills.vue';
import SocialFeed from './components/SocialFeed.vue';
import { blogs } from './components/data';
import About from './components/About.vue';
import Tasks from './components/Tasks.vue';
import BlogCard from './components/BlogCard.vue';
import StatCards from './components/StatCards.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Profile')
</script>

<style scoped></style>