package com.example.mailbox.service;

import com.example.mailbox.model.Mail;
import com.example.mailbox.repository.IMailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MailService implements  IMailService{

    @Autowired
    IMailRepository mailRepository;


    @Override
    public Mail getMailInfor() {
        return mailRepository.getMailInfor();
    }

    @Override
    public void updateMail(Mail mail) {
        mailRepository.updateMail(mail);
    }

}
