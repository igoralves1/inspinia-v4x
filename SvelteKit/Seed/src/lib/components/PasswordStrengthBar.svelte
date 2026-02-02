<script lang="ts">
	import { writable } from 'svelte/store';

	export let password: string = '';

	const strength = writable(0);
	const strengthBars = Array(4).fill(0);

	const calculatePasswordStrength = (password: string) => {
		let score = 0;
		if (password.length >= 8) score++;
		if (/[A-Z]/.test(password)) score++;
		if (/\d/.test(password)) score++;
		if (/[\W_]/.test(password)) score++;
		return score;
	};

	$: strength.set(calculatePasswordStrength(password));
</script>

<div class="password-bar my-2">
	{#each strengthBars as _, i (i)}
		<div class="strong-bar {i < $strength ? `bar-active-${$strength}` : ''}"></div>
	{/each}
</div>
<p class="text-muted fs-xs mb-0">Use 8+ characters with letters, numbers & symbols.</p>
