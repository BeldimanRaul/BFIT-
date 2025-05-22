export const colors = {
  primary: '#0a84ff',       
  success: '#34c759',       
  danger: '#ff3b30',
  warning: '#ffcc00',
  background: '#f2f2f7',
  card: '#ffffff',
  border: '#d1d1d6',
  text: '#1c1c1e',
  muted: '#8e8e93',
  white: '#fff',
};

export const spacing = {
  xs: 8,
  sm: 12,
  md: 20,
  lg: 28,
  xl: 36,
};

export const fontSizes = {
  sm: 14,
  md: 17,
  lg: 22,
  xl: 28,
};

export const textStyles = {
  title: {
    fontSize: fontSizes.xl,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: fontSizes.md,
    color: colors.muted,
    marginBottom: spacing.xs,
  },
  result: {
    fontSize: fontSizes.lg,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
  },
};

export const inputStyles = {
  base: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: spacing.md,
    fontSize: fontSizes.md,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
};

export const pickerStyles = {
  base: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
};

export const containerStyle = {
  flex: 1,
  backgroundColor: colors.background,
  padding: spacing.lg,
};
