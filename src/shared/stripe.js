const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_bHQbzz4toRrYzeBjW3kMLInf'
  : 'pk_test_7QWQUfVCCkZMEySkZH9UfVBB';

export default STRIPE_PUBLISHABLE;