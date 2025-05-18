
export const colors = {
  primary: '#0a84ff',
  background: '#f0f4f8',
  white: '#ffffff',
  text: '#1c1c1e',
  gray: '#555',
};

export const spacing = {
  sm: 10,
  md: 20,
  lg: 30,
};

export const fontSizes = {
  sm: 16,
  md: 20,
  lg: 28,
};

export const textStyles = {
  title: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    marginBottom: spacing.md,
    textAlign: 'center',
    color: colors.primary,
  },
  label: {
    fontSize: fontSizes.sm,
    marginTop: spacing.sm,
    color: colors.gray,
  },
  result: {
    marginTop: spacing.md,
    fontSize: fontSizes.md,
    textAlign: 'center',
  },
};

export const inputStyles = {
  base: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    fontSize: fontSizes.sm,
    marginVertical: spacing.sm,
  },
};

export const pickerStyles = {
  base: {
    backgroundColor: colors.white,
    marginVertical: spacing.sm,
  },
};

export const containerStyle = {
  flex: 1,
  padding: spacing.md,
  backgroundColor: colors.background,
};
