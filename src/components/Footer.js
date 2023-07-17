import {
  createStyles,
  Container,
  Group,
  Anchor,
  rem,
  Flex,
  Text,
} from '@mantine/core';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

function Footer({links}) {
  const {classes} = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>
          <Flex>
            <Text
              style={{
                color: 'white',
              }}
            >
              © 2023 Samplify.com All Rights Reserved Terms of Use Privacy
              Policy
            </Text>
          </Flex>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;
