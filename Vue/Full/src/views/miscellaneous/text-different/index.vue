<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Text Different" subtitle="Miscellaneous" />

            <UICard title="diff">
                <BRow>
                    <BCol md="6">
                        <h5 class="mb-2 text-uppercase">Original Text</h5>
                        <BFormTextarea v-model="originalText" rows="8" class="diff-original" />
                    </BCol>

                    <BCol md="6">
                        <h5 class="mb-2 text-uppercase">Changed Text</h5>
                        <BFormTextarea v-model="modifiedText" rows="8" class="diff-changed" />
                    </BCol>

                    <BCol md="12">
                        <h5 class="mb-2 mt-3 text-uppercase">Results</h5>
                        <TextDifferentView :original-text="originalText" :modified-text="modifiedText" />
                    </BCol>
                </BRow>
            </UICard>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BFormTextarea, BRow } from 'bootstrap-vue-next';
import { ref } from 'vue'
import UICard from '@/components/UICard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';
import TextDifferentView from '@/components/TextDifferentView.vue';

const originalText = ref<string>(
    'On a rainy Monday morning in a small town, Emma walked into her favorite café, her umbrella dripping and her hair slightly frizzy from the storm. She always ordered the same thing: black coffee, two sugars, and a blueberry muffin. But today, someone was already sitting at her usual table by the window. It was Jack — a quiet man with a book in hand and headphones around his neck. Their eyes met for a second. He smiled and motioned for her to join him. Hesitant but intrigued, Emma accepted.'
)

const modifiedText = ref<string>(
    'On a rainy Monday morning in a small town, Emma stepped into her favorite café, her umbrella dripping and her hair slightly frizzy from the damp weather. She always ordered the same thing: black coffee with two sugars and a blueberry muffin. But today, someone was already seated at her usual window table. It was Jack — a quiet man with a book in one hand and headphones resting around his neck. Their eyes met briefly. He smiled and gestured for her to join him. Hesitant but curious, Emma agreed.'
)

usePageMeta('Text Diff')
</script>