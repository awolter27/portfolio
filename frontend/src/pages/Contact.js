function Contact({ contact }) {
    return (
        <>
            <div className='contact-div'>
                <h1 className='contact-heading'>CONTACT</h1>
                <div>
                    <div className='contact-inner-div'>
                        <img className='contact-image' src='https://i.imgur.com/jr58ilc.png' alt='Email Logo' />
                        <h1 className='contact-name'><span>Email: </span>{contact.email}</h1>
                    </div>
                    <div className='contact-inner-div'>
                        <img className='contact-image' src='https://i.imgur.com/rbj320O.png' alt='LinkedIn Logo' />
                        <a href={contact.linkedin} rel="noreferrer" target='_blank'>
                            <h1 className='contact-name'><span>LinkedIn: </span>{contact.linkedin}</h1>
                        </a>
                    </div>
                    <div className='contact-inner-div'>
                        <img className='contact-image' src='https://i.imgur.com/iOl1bxc.png' alt='GitHub Logo' />
                        <a href={contact.github} rel="noreferrer" target='_blank'>
                            <h1 className='contact-name'><span>GitHub: </span>{contact.github}</h1>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;