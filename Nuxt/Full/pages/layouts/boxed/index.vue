<template>
  <BContainer fluid>
    <PageBreadcrumb title="Boxed"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To enable the boxed layout, add
            <code>data-layout-width="boxed"</code> to the
            <code>&lt;html&gt;</code> tag. For optimal spacing and usability, we also recommend adding
            <code>data-sidenav-size="on-hover"</code> to make the sidebar compact while keeping more room for content.
            To apply this dynamically,
            use <code>setWidth('boxed')</code> and <code>setSideNavSize('on-hover')</code> from the
            <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setWidth, setSideNavSize, reset} = useLayout();

usePageTitle('Boxed Layout')

onMounted(() => {
  setWidth('boxed');
  setSideNavSize('on-hover')
});

onBeforeUnmount(() => {
  reset();
});
</script>