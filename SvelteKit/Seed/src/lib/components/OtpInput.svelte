<script lang="ts">
	import { Input } from '@sveltestrap/sveltestrap';

	export let value: string = '';
	export let length: number = 6;

	let otp: string[] = Array(length).fill('');

	$: if (value && value.length === length && value !== otp.join('')) {
		otp = value.split('');
	}

	const handleInput = (index: number, e: Event) => {
		const input = e.target as HTMLInputElement;

		const char = input.value.replace(/[^0-9]/g, '').charAt(0) || '';
		otp[index] = char;
		input.value = char;

		value = otp.join('');

		if (char && input.nextElementSibling) {
			(input.nextElementSibling as HTMLInputElement).focus();
		}
	};

	const handleKeyDown = (index: number, e: KeyboardEvent) => {
		const input = e.target as HTMLInputElement;
		if (e.key === 'Backspace' && !input.value && input.previousElementSibling) {
			(input.previousElementSibling as HTMLInputElement).focus();
		}
	};
</script>

<div class="d-flex gap-2 mb-3 two-factor">
	{#each otp as val, i (i)}
		<Input
			type="number"
			bind:value={otp[i]}
			on:input={(e) => handleInput(i, e)}
			on:keydown={(e) => handleKeyDown(i, e)}
			class="text-center"
			required
			inputmode="numeric"
			maxlength={1}
		/>
	{/each}
</div>
