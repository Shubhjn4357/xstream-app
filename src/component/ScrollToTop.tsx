import { Affix, Transition,  Tooltip, ActionIcon} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks';
import { IconChevronUp } from '@tabler/icons-react'

const ScrollToTop = () => {
    const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
    <Transition transition="slide-up" mounted={scroll.y > 0}>
      {(transitionStyles) => (
        <Tooltip  label="Scroll To Top" withArrow>
          <ActionIcon variant='subtle' radius="lg"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconChevronUp/>
          </ActionIcon>

        </Tooltip>
      )}
    </Transition>
  </Affix>
  )
}

export default ScrollToTop