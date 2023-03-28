package com.example.mailbox.repository;

import com.example.mailbox.model.Mail;

public interface IMailRepository {
    Mail getMailInfor();
    void updateMail(Mail mail);
}
