<template>
  <BContainer fluid>
    <PageBreadcrumb title="Gradient Topbar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To switch to a gradient topbar, add
            <code>data-topbar-color="gradient"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setTopBarColor('gradient')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setTopBarColor, reset} = useLayout();

usePageTitle('Gradient Topbar')

onMounted(() => {
  setTopBarColor('gradient')
});

onBeforeUnmount(() => {
  reset();
});
</script>