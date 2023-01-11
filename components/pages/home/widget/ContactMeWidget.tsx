export const ContactMeWidget = () => {
  return (
    <section className="border-brandGradient relative flex flex-col rounded-[12px] bg-black p-4 text-white">
      <div className="my-2">
        <h4>Hei (Hello)</h4>
        <p className="text-xs">Send me a message</p>
      </div>

      <form name="contact" method="POST" data-netlify={true}>
        <input type="hidden" name="form-name" value="contact" />
        <fieldset className="flex flex-col gap-4">
          <div>
            <input
              className="w-full rounded-md p-2 text-black outline-none"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div>
            <input
              className="w-full rounded-md p-2 text-black outline-none"
              placeholder="Subject"
              id="name"
              name="name"
            />
          </div>

          <div>
            <textarea
              className="w-full rounded-md p-2 text-black outline-none"
              placeholder="Message"
              id="message"
              name="message"
            />
          </div>

          <button
            className="inline-flex rounded-[12px] p-2"
            style={{ background: 'linear-gradient(90deg, #F97794, #623AA2)' }}
            type="submit"
          >
            Send
          </button>
        </fieldset>
      </form>
    </section>
  )
}
