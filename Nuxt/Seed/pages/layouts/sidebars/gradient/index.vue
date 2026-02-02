<template>
  <BContainer fluid>
    <PageBreadcrumb title="Gradient Sidebar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To switch to a gradient sidebar, add
            <code>data-menu-color="gradient"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setSideNavColor('gradient')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setSideNavColor, reset} = useLayout();

usePageTitle('Gradient Sidebar')

onMounted(() => {
  setSideNavColor('gradient')
});

onBeforeUnmount(() => {
  reset();
});
</script>