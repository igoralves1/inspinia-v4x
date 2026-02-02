<template>
    <BCard no-body>
        <BCardHeader>
            <BCardTitle tag="h4">Typeahead</BCardTitle>
        </BCardHeader>

        <BCardBody>
            <p class="text-muted mb-2">
                a flexible JavaScript library that provides a strong foundation for building robust
                typeaheads
            </p>

            <a class="btn btn-link p-0 fw-semibold" href="https://twitter.github.io/typeahead.js/" target="_blank">
                Typeahead on View Official Website
                <Icon icon="tabler:chevron-right" class="ms-1" />
            </a>
        </BCardBody>

        <BCardBody>

            <BRow class="g-3 mb-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Basic</h5>
                </BCol>
                <BCol lg="6">
                    <vue3-simple-typeahead class="form-control" placeholder="Enter states from USA" :items="US_STATES"
                        @selectItem="handleSelectBasic" @onInput="handleInput" :minInputLength="1" />
                    <small class="text-muted d-block mt-1">Selected: {{ basicSelection ?? '—' }}</small>
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3 mb-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">BloodHound (Suggestion Engine)</h5>
                </BCol>
                <BCol lg="6">
                    <vue3-simple-typeahead class="form-control" placeholder="Enter states from USA"
                        :items="bloodhoundItems" :minInputLength="1" @onInput="onInputHandler"
                        @selectItem="onSelectItemHandler" />
                    <small class="text-muted d-block mt-1">Suggestions count: {{ bloodhoundItems.length }}</small>
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3 mb-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Prefetch</h5>
                </BCol>
                <BCol lg="6">
                    <vue3-simple-typeahead class="form-control" placeholder="Enter states from USA"
                        :items="prefetchItems" :minInputLength="1" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3 mb-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Default Suggestions</h5>
                </BCol>
                <BCol lg="6">
                    <vue3-simple-typeahead class="form-control" placeholder="Default Suggestions"
                        :items="defaultSuggestions" :minInputLength="0" :minItemLength="0" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3 mb-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Custom Template</h5>
                </BCol>
                <BCol lg="6">
                    <vue3-simple-typeahead class="form-control" placeholder="Search For Oscar Winner" :items="OSCARS"
                        :itemProjection="oscarProjection" :minInputLength="1" @selectItem="handleSelectCustom">
                        <template #list-item-text="{ item, itemProjection, boldMatchText }">
                            <div class="d-flex justify-content-between align-items-center">
                                <div v-html="boldMatchText(itemProjection(item))"></div>
                                <small class="text-muted">{{ item.year }}</small>
                            </div>
                        </template>
                    </vue3-simple-typeahead>

                    <small class="text-muted d-block mt-1">Selected: {{ customSelected ? customSelected.title : '—'
                    }}</small>
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3 mb-3">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Multiple Datasets</h5>
                </BCol>
                <BCol lg="6">
                    <vue3-simple-typeahead class="form-control" placeholder="NBA and NHL Teams" :items="multiItems"
                        :itemProjection="multiProjection" :minInputLength="1">
                        <template #list-item-text="{ item, itemProjection, boldMatchText }">
                            <div class="d-flex justify-content-between align-items-center">
                                <div v-html="boldMatchText(itemProjection(item))"></div>
                                <small class="text-muted">{{ item.league }}</small>
                            </div>
                        </template>
                    </vue3-simple-typeahead>
                </BCol>
            </BRow>

        </BCardBody>
    </BCard>

</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BCard, BCardBody, BCardHeader, BCardTitle } from 'bootstrap-vue-next';
import { computed, onMounted, ref } from 'vue';

import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'


const US_STATES = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
]

const NBA_TEAMS = ['Lakers', 'Warriors', 'Celtics', 'Bulls', 'Nets']
const NHL_TEAMS = ['Bruins', 'Blackhawks', 'Maple Leafs', 'Canucks', 'Rangers']

const OSCARS = [
    { title: 'The Godfather', year: 1973 },
    { title: 'Forrest Gump', year: 1995 },
    { title: 'The Shape of Water', year: 2018 },
    { title: 'Parasite', year: 2020 },
    { title: 'CODA', year: 2022 }
]

let basicSelection: string | null = null
let basicInput: string | null = null

const bloodhoundItems = ref<string[]>([])
let bloodhoundTimer: ReturnType<typeof setTimeout> | null = null

function debounceFilter(input: string) {
    if (bloodhoundTimer) clearTimeout(bloodhoundTimer)
    bloodhoundTimer = setTimeout(() => {
        const q = input.trim().toLowerCase()
        if (!q) {
            bloodhoundItems.value = []
            return
        }
        bloodhoundItems.value = US_STATES.filter(s => s.toLowerCase().includes(q)).slice(0, 10)
    }, 180) // small debounce
}

const prefetchItems = ref<string[]>([])
onMounted(() => {
    prefetchItems.value = US_STATES.slice()
})

const defaultSuggestions = ref(['California', 'Texas', 'Florida'])

const customSelected = ref<any>(null)
function oscarProjection(item: any) { return item.title }

const multiItems = computed(() => {
    const nba = NBA_TEAMS.map(t => ({ name: t, league: 'NBA' }))
    const nhl = NHL_TEAMS.map(t => ({ name: t, league: 'NHL' }))
    return [...nba, ...nhl]
})
function multiProjection(item: any) { return item.name }

function handleSelectBasic(item: string) { basicSelection = item }
function handleSelectCustom(item: any) { customSelected.value = item }


function onInputHandler(evt: { input: string }) {
    debounceFilter(evt.input)
}

// Explicitly type item as string
function onSelectItemHandler(item: string) {
    basicSelection = item
}

function handleInput(e: { input: string }) {
    basicInput = e.input
}
</script>

<style scoped></style>