<template>
    <UICard title="Skills">
        <div class="d-flex flex-wrap gap-1">
            <button v-for="skill in skills" :key="skill" class="btn btn-light btn-sm">
                {{ skill }}
            </button>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import UICard from '@/components/UICard.vue';


const skills: string[] = [
    'Product Design',
    'UI/UX',
    'Tailwind CSS',
    'Bootstrap',
    'React.js',
    'Next.js',
    'Vue.js',
    'Figma',
    'Design Systems',
    'Template Authoring',
    'Responsive Design',
    'Component Libraries',
]
</script>
