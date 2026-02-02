<template>
  <BContainer fluid>
    <PageBreadcrumb title="Offcanvas Sidebar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To enable the offcanvas menu, add
            <code>data-sidenav-size="offcanvas"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setSideNavSize('offcanvas')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setSideNavSize, reset} = useLayout();

usePageTitle('Offcanvas Sidebar')

onMounted(() => {
  setSideNavSize('offcanvas')
});

onBeforeUnmount(() => {
  reset();
});
</script>