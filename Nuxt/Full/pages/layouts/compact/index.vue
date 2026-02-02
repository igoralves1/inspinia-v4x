<template>
    <BContainer fluid>
        <PageBreadcrumb title="Compact" />
    </BContainer>

    <BContainer xl>
        <BRow>
            <BCol cols="12">
                <BAlert show variant="info" class="alert-bordered border-start border-info"
                    body-class="d-flex align-items-center gap-2">
                    <Icon name="tabler:info-circle" class="fs-xxl" />
                    <div>
                        To use the compact layout, follow this structure: wrap your page title in
                        <code>&lt;BContainer fluid&gt;</code> and place your main content inside
                        <code>&lt;BContainer xl&gt;</code>. This ensures proper spacing and alignment.
                    </div>
                </BAlert>
            </BCol>
        </BRow>
    </BContainer>
</template>

<script setup lang="ts">
const { setSideNavSize, reset } = useLayout();

onMounted(() => {
    setSideNavSize('compact')
});

onBeforeUnmount(() => {
    reset();
});
usePageTitle('Compact Layout')
</script>