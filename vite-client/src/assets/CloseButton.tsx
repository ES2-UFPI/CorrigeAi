export function CloseButton() {
  return (
    <button style={{
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      height: '25px',
    }}>
      <svg
        width="25px"
        height="25px"
        version="1.1"
        viewBox="0 0 20 20"
        x="0px"
        y="0px"
      >
        <g>
          <path
            d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"
            fill="#272643"
          ></path>
        </g>
      </svg>
    </button>
  )
}
