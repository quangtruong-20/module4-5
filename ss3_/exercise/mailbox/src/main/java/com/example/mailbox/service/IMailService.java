package com.example.mailbox.service;

import com.example.mailbox.model.Mail;

public interface IMailService {
    Mail getMailInfor();
    void updateMail(Mail mail);

}
