<template>
  <BContainer fluid>
    <PageBreadcrumb title="Compact Sidebar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To enable the medium-sized (compact) sidebar, add
            <code>data-sidenav-size="compact"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setSideNavSize('compact')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setSideNavSize, reset} = useLayout();

usePageTitle('Compact Sidebar')

onMounted(() => {
  setSideNavSize('compact')
});

onBeforeUnmount(() => {
  reset();
});
</script>